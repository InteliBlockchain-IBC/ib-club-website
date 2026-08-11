/* ══════════ A MARCA EM 3D — carregamento tardio, com fallback ══════════
   SPEC-rodada-2 §2, PLANO §2. Só inicializa se: sem prefers-reduced-motion,
   com ponteiro (hover:hover), e WebGL de verdade disponível. Three.js só é
   baixado depois de provar as três condições — quem não vai renderizar
   nunca paga os ~600KB (SPEC §2.6, §2.5 do plano). Qualquer falha em
   qualquer etapa deixa o PNG empilhado em CSS no lugar — ele nunca é
   removido antes do 3D estar provado.

   O `import('three')` é o que mantém essa promessa dentro do Parcel: ele
   vira um bundle separado, baixado só quando esta linha executa. Trocar por
   um import estático no topo do arquivo mandaria a biblioteca inteira para
   todo mundo, inclusive para o celular que nunca vai montar o canvas. */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 2 polígonos, 40 vértices, extraídos do PNG oficial e já verificados
// (SPEC §2.4: contorno simples, buraco simples, buraco dentro do contorno,
// sentidos opostos). Y invertido porque a coordenada de imagem cresce para
// baixo e o THREE.Shape cresce para cima.
const POLIGONOS = [
  [[258.01, 70.464], [206.994, 121.479], [308.985, 223.47], [342.942, 189.512], [308.991, 155.56], [282.071, 182.48], [265.054, 165.463], [309.025, 121.492], [377.131, 189.598], [309.098, 257.632], [257.99, 206.524], [156.028, 308.486], [189.999, 342.457], [223.941, 308.515], [197.005, 281.579], [214.026, 264.558], [258.1, 308.632], [190.002, 376.73], [121.896, 308.624], [172.982, 257.538], [70.994, 155.55], [37.045, 189.499], [70.994, 223.448], [97.935, 196.507], [114.949, 213.52], [70.869, 257.601], [2.836, 189.568], [70.94, 121.464], [121.981, 172.504], [223.954, 70.531], [189.983, 36.561], [156.05, 70.494], [182.986, 97.43], [165.939, 114.477], [121.931, 70.47], [189.973, 2.427]],
  [[139.016, 189.487], [189.999, 240.47], [240.949, 189.52], [189.966, 138.537]],
];

/* Monta o nó em 3D dentro do slot. Devolve sempre uma função de limpeza —
   inclusive quando desiste, para o chamador não precisar saber por quê. */
export default function montarNo3d(slot, canvas) {
  if (!slot || !canvas) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  if (!window.matchMedia('(hover: hover)').matches) return () => {};

  // prova mínima de WebGL antes de baixar a biblioteca inteira
  let temWebgl = false;
  try {
    const sonda = document.createElement('canvas');
    temWebgl = !!(sonda.getContext('webgl') || sonda.getContext('experimental-webgl'));
  } catch (e) { temWebgl = false; }
  if (!temWebgl) return () => {};

  let vivo = true;
  let pararLaco = () => {};

  // carregamento tardio de verdade: só baixa a lib quando o hero se aproxima
  // da viewport — ninguém que nunca rola até lá faz a requisição
  let disparado = false;
  const ioCarga = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting || disparado) return;
      disparado = true;
      ioCarga.disconnect();
      import('three')
        .then((THREE) => { if (vivo) pararLaco = iniciar(THREE, slot, canvas); })
        .catch(() => {});           // sem lib carregada: fica o PNG
    });
  }, { threshold: 0.1, rootMargin: '200px' });
  ioCarga.observe(slot);

  return () => { vivo = false; ioCarga.disconnect(); pararLaco(); };
}

function iniciar(THREE, slot, canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  } catch (e) { return () => {}; }   // contexto recusado: fica o PNG

  const shape = new THREE.Shape();
  POLIGONOS[0].forEach(([x, y], i) => { if (i === 0) shape.moveTo(x, -y); else shape.lineTo(x, -y); });
  shape.closePath();
  const furo = new THREE.Path();
  POLIGONOS[1].forEach(([x, y], i) => { if (i === 0) furo.moveTo(x, -y); else furo.lineTo(x, -y); });
  furo.closePath();
  shape.holes.push(furo);

  // a fita do nó tem ~27px numa caixa de 374 (SPEC §2.1) — é essa
  // proporção que decide se a peça lê como objeto ou como adesivo
  const FITA = 27;
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: FITA,                    // ≈ 1× a largura da fita
    bevelEnabled: true,
    bevelThickness: FITA * 0.09,
    bevelSize: FITA * 0.1,          // ≈ 10% da fita — é o bisel que pega a luz de contorno
    bevelSegments: 3,
    curveSegments: 8,
  });
  geo.center();                     // senão a peça orbita em vez de girar

  // corte na DIAGONAL, roxo de um lado, azul do outro. As duas cores são
  // as REAIS da logo — amostradas de assets/marca-gradiente.png, agrupadas
  // por matiz (a peça é simétrica, então amostrar por posição misturava as
  // duas pontas) e clareadas ~16% a pedido do Messias. Cor por vértice,
  // não textura: sem UV pra acertar, sem espera de carregamento
  // assíncrono — a peça aparece no primeiro quadro, sem risco de piscar preta.
  geo.computeBoundingBox();
  const { min, max } = geo.boundingBox;
  const roxo = new THREE.Color('#5b1f96');   // tom forte — clarear demais lavava a peça
  const azul = new THREE.Color('#1739a8');
  const posAttr = geo.attributes.position;
  const cores = new Float32Array(posAttr.count * 3);
  const tmpCor = new THREE.Color();
  for (let i = 0; i < posAttr.count; i++) {
    const dx = (posAttr.getX(i) - min.x) / (max.x - min.x);
    const dy = (posAttr.getY(i) - min.y) / (max.y - min.y);
    const diagonal = (dx + dy) / 2;                  // 0 = canto inf.-esq., 1 = canto sup.-dir.
    const t = clamp((diagonal - 0.42) / 0.16, 0, 1); // banda estreita — corte, não degradê
    tmpCor.copy(azul).lerp(roxo, t);                 // invertido a pedido: troca os lados
    tmpCor.toArray(cores, i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cores, 3));

  const material = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    metalness: 0.05, roughness: 0.25, clearcoat: 0.6, clearcoatRoughness: 0.25,
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.scale.setScalar(0.0078);     // maior — sobrava moldura vazia no canvas
                                    // e o nó ficava "longe" do wordmark ao lado
  const scene = new THREE.Scene();
  scene.add(mesh);

  // luz: quem faz a peça PARECER 3D é o contraste, não a cor — ambiente
  // baixa pra sobrar sombra de verdade nas dobras do nó, e uma principal
  // branca forte, em ângulo raspante, pra desenhar realce e sombra no
  // bisel. Ciano e magenta viram acento de borda, não a luz que define a
  // forma — é isso que lia "chapado" antes.
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));
  const principal = new THREE.DirectionalLight(0xffffff, 1.1);
  principal.position.set(6, 9, 5);
  scene.add(principal);
  const preenchimento = new THREE.DirectionalLight(0xffffff, 0.35);
  preenchimento.position.set(-4, -3, 6);   // suaviza o lado que a principal deixa no escuro
  scene.add(preenchimento);
  const contorno = new THREE.DirectionalLight(0x1b98e0, 1.6);
  contorno.position.set(-6, 3, -4);
  scene.add(contorno);
  const acento = new THREE.PointLight(0x9f0e5d, 0.9, 20);
  acento.position.set(3, -2, 4);
  scene.add(acento);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 7);

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function redimensionar() {
    const r = slot.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;   // <span> sem display:block dá 0×0 — já custou caro
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
    return true;
  }
  if (!redimensionar()) return () => {};

  // pose de repouso: inclinada, nunca de frente (SPEC §2.3) — de frente
  // não mostra profundidade. Alcance do movimento maior que o original da
  // Inteli Júnior (0.15/0.1) — pedido do Messias: sem isso o giro é sutil
  // demais pra sentir a peça como 3D de verdade.
  const REST_X = 0.18;
  const REST_Y = -0.32;
  const OSC = 0.68;                 // amplitude da oscilação — nunca dá volta completa
  let autoPhase = 0;
  const pointerAlvo = { x: 0, y: 0 };
  const pointerAtual = { x: 0, y: 0 };
  let arrastoAlvo = 0;
  let arrastoAtual = 0;
  let arrastando = false;
  let arrastoBase = 0;
  let anguloBase = 0;
  let ultimaInteracao = 0;
  let quadros = 0;                  // contador de verificação — incrementa a cada render real

  function aplicarPose() {
    pointerAtual.x += (pointerAlvo.x - pointerAtual.x) * 0.04;
    pointerAtual.y += (pointerAlvo.y - pointerAtual.y) * 0.04;
    arrastoAtual += (arrastoAlvo - arrastoAtual) * 0.15;

    // volta ao repouso após 1,5s — sincronizada: a auto-rotação nunca
    // parou de rodar, então soltar o deslocamento manual não dá salto
    if (performance.now() - ultimaInteracao > 1500) {
      pointerAlvo.x += (0 - pointerAlvo.x) * 0.04;
      pointerAlvo.y += (0 - pointerAlvo.y) * 0.04;
      arrastoAlvo += (0 - arrastoAlvo) * 0.06;
    }

    autoPhase += 0.005;             // auto-rotação em Y, 0.005 rad/quadro
    const autoY = Math.sin(autoPhase) * OSC;

    mesh.rotation.x = REST_X + pointerAtual.x;
    mesh.rotation.y = REST_Y + autoY + pointerAtual.y + arrastoAtual;
  }

  let ativo = true;
  let encerrado = false;
  function quadro() {
    if (!ativo || encerrado) return;
    aplicarPose();
    renderer.render(scene, camera);
    quadros++;
    requestAnimationFrame(quadro);
  }

  // quadro síncrono antes do laço — requestAnimationFrame não dispara em
  // documento oculto, e o headless conta como oculto (PLANO §2.6). Cor
  // por vértice não depende de rede, então isto roda direto, sem esperar
  // nada — a peça não corre risco de piscar preta no primeiro quadro.
  aplicarPose();
  renderer.render(scene, camera);
  quadros++;
  if (renderer.getContext().getError() !== 0) return () => {};   // erro real de GL: fica o PNG

  // só troca o fallback pelo canvas depois do primeiro desenho confirmado
  slot.classList.add('no-slot--gl');
  document.documentElement.classList.add('gl-ativo');
  requestAnimationFrame(quadro);

  // pausa fora da tela — IntersectionObserver, threshold 0.1 (SPEC §2.2)
  const ioPausa = new IntersectionObserver((es) => {
    es.forEach((e) => { ativo = e.isIntersecting; if (ativo) requestAnimationFrame(quadro); });
  }, { threshold: 0.1 });
  ioPausa.observe(slot);

  const aoMoverNoSlot = (e) => {
    if (e.pointerType !== 'mouse' || arrastando) return;
    const r = slot.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    pointerAlvo.x = clamp(-ny * 0.32, -0.32, 0.32);
    pointerAlvo.y = clamp(nx * 0.26, -0.26, 0.26);
    ultimaInteracao = performance.now();
  };
  const aoPressionar = (e) => {
    arrastando = true; arrastoBase = e.clientX; anguloBase = arrastoAlvo;
    slot.setPointerCapture(e.pointerId);
    ultimaInteracao = performance.now();
  };
  const aoArrastar = (e) => {
    if (!arrastando) return;
    arrastoAlvo = clamp(anguloBase + (e.clientX - arrastoBase) * 0.018, -0.8, 0.8);
    ultimaInteracao = performance.now();
  };
  const aoSoltar = () => { arrastando = false; ultimaInteracao = performance.now(); };

  slot.addEventListener('pointermove', aoMoverNoSlot);
  slot.addEventListener('pointerdown', aoPressionar);
  window.addEventListener('pointermove', aoArrastar);
  window.addEventListener('pointerup', aoSoltar);
  window.addEventListener('resize', redimensionar);

  // gancho de verificação — sem custo em produção, útil para provar por
  // fora que o desenho está acontecendo de verdade (PLANO §2.6)
  window.__no3d = () => ({ quadros, erro: renderer.getContext().getError(), rotY: mesh.rotation.y, rotX: mesh.rotation.x });

  return () => {
    encerrado = true;
    ioPausa.disconnect();
    slot.removeEventListener('pointermove', aoMoverNoSlot);
    slot.removeEventListener('pointerdown', aoPressionar);
    window.removeEventListener('pointermove', aoArrastar);
    window.removeEventListener('pointerup', aoSoltar);
    window.removeEventListener('resize', redimensionar);
    slot.classList.remove('no-slot--gl');
    document.documentElement.classList.remove('gl-ativo');
    geo.dispose();
    material.dispose();
    renderer.dispose();
    delete window.__no3d;
  };
}
