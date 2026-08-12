/* ══════════ A MARCA EM 3D — carregamento tardio, com fallback ══════════
   SPEC-rodada-2 §2, PLANO §2. Inicializa em qualquer dispositivo — inclusive
   touch, a pedido do Messias — desde que sem prefers-reduced-motion e com
   WebGL de verdade disponível. Three.js só é baixado depois de provar as
   duas condições (SPEC §2.6, §2.5 do plano). Qualquer falha em qualquer
   etapa deixa o PNG empilhado em CSS no lugar — ele nunca é removido antes
   do 3D estar provado.

   Sem mouse a peça não perde vida: a auto-rotação (`autoPhase`/`OSC`, mais
   abaixo) roda sozinha, independente de ponteiro. O que muda por tipo de
   entrada é só a INTERAÇÃO: `onPointerMove` segue o cursor e é mouse-only de
   propósito (não existe posição contínua sem contato num touchscreen);
   `onPointerDown`/`onDrag`/`onPointerUp` não filtram tipo, então arrastar
   com o dedo já girava a peça mesmo antes desta mudança — só faltava deixar
   o touch entrar na porta principal.

   O custo dito com todas as letras: ligar isto em touch manda ~680KB de
   Three.js para todo celular que rolar até a dobra, não só para quem tem
   mouse. Continua lazy (só baixa perto da viewport) e morre sob
   prefers-reduced-motion — o que não dá é para não pagar o download.

   O `import('three')` é o que mantém essa promessa dentro do Parcel: ele
   vira um bundle separado, baixado só quando esta linha executa. Trocar por
   um import estático no topo do arquivo mandaria a biblioteca inteira para
   todo mundo, inclusive para quem nunca rola até o hero. */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 2 polígonos, 40 vértices, extraídos do PNG oficial e já verificados
// (SPEC §2.4: contorno simples, buraco simples, buraco dentro do contorno,
// sentidos opostos). Y invertido porque a coordenada de imagem cresce para
// baixo e o THREE.Shape cresce para cima.
const POLYGONS = [
  [[258.01, 70.464], [206.994, 121.479], [308.985, 223.47], [342.942, 189.512], [308.991, 155.56], [282.071, 182.48], [265.054, 165.463], [309.025, 121.492], [377.131, 189.598], [309.098, 257.632], [257.99, 206.524], [156.028, 308.486], [189.999, 342.457], [223.941, 308.515], [197.005, 281.579], [214.026, 264.558], [258.1, 308.632], [190.002, 376.73], [121.896, 308.624], [172.982, 257.538], [70.994, 155.55], [37.045, 189.499], [70.994, 223.448], [97.935, 196.507], [114.949, 213.52], [70.869, 257.601], [2.836, 189.568], [70.94, 121.464], [121.981, 172.504], [223.954, 70.531], [189.983, 36.561], [156.05, 70.494], [182.986, 97.43], [165.939, 114.477], [121.931, 70.47], [189.973, 2.427]],
  [[139.016, 189.487], [189.999, 240.47], [240.949, 189.52], [189.966, 138.537]],
];

/* Monta o nó em 3D dentro do slot. Devolve sempre uma função de limpeza —
   inclusive quando desiste, para o chamador não precisar saber por quê. */
export default function mountKnot3d(slot, canvas) {
  if (!slot || !canvas) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  // prova mínima de WebGL antes de baixar a biblioteca inteira
  let hasWebgl = false;
  try {
    const probe = document.createElement('canvas');
    hasWebgl = !!(probe.getContext('webgl') || probe.getContext('experimental-webgl'));
  } catch (e) { hasWebgl = false; }
  if (!hasWebgl) return () => {};

  let alive = true;
  let stopLoop = () => {};

  // carregamento tardio de verdade: só baixa a lib quando o hero se aproxima
  // da viewport — ninguém que nunca rola até lá faz a requisição
  let triggered = false;
  const loadObserver = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting || triggered) return;
      triggered = true;
      loadObserver.disconnect();
      import('three')
        .then((THREE) => { if (alive) stopLoop = start(THREE, slot, canvas); })
        .catch(() => {});           // sem lib carregada: fica o PNG
    });
  }, { threshold: 0.1, rootMargin: '200px' });
  loadObserver.observe(slot);

  return () => { alive = false; loadObserver.disconnect(); stopLoop(); };
}

function start(THREE, slot, canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  } catch (e) { return () => {}; }   // contexto recusado: fica o PNG

  const shape = new THREE.Shape();
  POLYGONS[0].forEach(([x, y], i) => { if (i === 0) shape.moveTo(x, -y); else shape.lineTo(x, -y); });
  shape.closePath();
  const hole = new THREE.Path();
  POLYGONS[1].forEach(([x, y], i) => { if (i === 0) hole.moveTo(x, -y); else hole.lineTo(x, -y); });
  hole.closePath();
  shape.holes.push(hole);

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
  // as REAIS da logo — amostradas de assets/knot-gradient.png, agrupadas
  // por matiz (a peça é simétrica, então amostrar por posição misturava as
  // duas pontas) e clareadas ~16% a pedido do Messias. Cor por vértice,
  // não textura: sem UV pra acertar, sem espera de carregamento
  // assíncrono — a peça aparece no primeiro quadro, sem risco de piscar preta.
  geo.computeBoundingBox();
  const { min, max } = geo.boundingBox;
  const purple = new THREE.Color('#5b1f96');   // tom forte — clarear demais lavava a peça
  const blue = new THREE.Color('#1739a8');
  const posAttr = geo.attributes.position;
  const colors = new Float32Array(posAttr.count * 3);
  const tmpColor = new THREE.Color();
  for (let i = 0; i < posAttr.count; i++) {
    const dx = (posAttr.getX(i) - min.x) / (max.x - min.x);
    const dy = (posAttr.getY(i) - min.y) / (max.y - min.y);
    const diagonal = (dx + dy) / 2;                  // 0 = canto inf.-esq., 1 = canto sup.-dir.
    const t = clamp((diagonal - 0.42) / 0.16, 0, 1); // banda estreita — corte, não degradê
    tmpColor.copy(blue).lerp(purple, t);                 // invertido a pedido: troca os lados
    tmpColor.toArray(colors, i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

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
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(6, 9, 5);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
  fillLight.position.set(-4, -3, 6);   // suaviza o lado que a principal deixa no escuro
  scene.add(fillLight);
  const rimLight = new THREE.DirectionalLight(0x1b98e0, 1.6);
  rimLight.position.set(-6, 3, -4);
  scene.add(rimLight);
  const accent = new THREE.PointLight(0x9f0e5d, 0.9, 20);
  accent.position.set(3, -2, 4);
  scene.add(accent);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 7);

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function resize() {
    const r = slot.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;   // <span> sem display:block dá 0×0 — já custou caro
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.updateProjectionMatrix();
    return true;
  }
  if (!resize()) return () => {};

  // pose de repouso: inclinada, nunca de frente (SPEC §2.3) — de frente
  // não mostra profundidade. Alcance do movimento maior que o original da
  // Inteli Júnior (0.15/0.1) — pedido do Messias: sem isso o giro é sutil
  // demais pra sentir a peça como 3D de verdade.
  const REST_X = 0.18;
  const REST_Y = -0.32;
  const OSC = 0.68;                 // amplitude da oscilação — nunca dá volta completa
  let autoPhase = 0;
  const pointerTarget = { x: 0, y: 0 };
  const pointerCurrent = { x: 0, y: 0 };
  let dragTarget = 0;
  let dragCurrent = 0;
  let dragging = false;
  let dragOrigin = 0;
  let angleOrigin = 0;
  let lastInteraction = 0;
  let frames = 0;                  // contador de verificação — incrementa a cada render real

  function applyPose() {
    pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.04;
    pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.04;
    dragCurrent += (dragTarget - dragCurrent) * 0.15;

    // volta ao repouso após 1,5s — sincronizada: a auto-rotação nunca
    // parou de rodar, então soltar o deslocamento manual não dá salto
    if (performance.now() - lastInteraction > 1500) {
      pointerTarget.x += (0 - pointerTarget.x) * 0.04;
      pointerTarget.y += (0 - pointerTarget.y) * 0.04;
      dragTarget += (0 - dragTarget) * 0.06;
    }

    autoPhase += 0.005;             // auto-rotação em Y, 0.005 rad/quadro
    const autoY = Math.sin(autoPhase) * OSC;

    mesh.rotation.x = REST_X + pointerCurrent.x;
    mesh.rotation.y = REST_Y + autoY + pointerCurrent.y + dragCurrent;
  }

  let active = true;
  let disposed = false;
  function renderFrame() {
    if (!active || disposed) return;
    applyPose();
    renderer.render(scene, camera);
    frames++;
    requestAnimationFrame(renderFrame);
  }

  // quadro síncrono antes do laço — requestAnimationFrame não dispara em
  // documento oculto, e o headless conta como oculto (PLANO §2.6). Cor
  // por vértice não depende de rede, então isto roda direto, sem esperar
  // nada — a peça não corre risco de piscar preta no primeiro quadro.
  applyPose();
  renderer.render(scene, camera);
  frames++;
  if (renderer.getContext().getError() !== 0) return () => {};   // erro real de GL: fica o PNG

  // só troca o fallback pelo canvas depois do primeiro desenho confirmado
  slot.classList.add('knot--gl');
  document.documentElement.classList.add('gl-ativo');
  requestAnimationFrame(renderFrame);

  // pausa fora da tela — IntersectionObserver, threshold 0.1 (SPEC §2.2)
  const pauseObserver = new IntersectionObserver((es) => {
    es.forEach((e) => { active = e.isIntersecting; if (active) requestAnimationFrame(renderFrame); });
  }, { threshold: 0.1 });
  pauseObserver.observe(slot);

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse' || dragging) return;
    const r = slot.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    pointerTarget.x = clamp(-ny * 0.32, -0.32, 0.32);
    pointerTarget.y = clamp(nx * 0.26, -0.26, 0.26);
    lastInteraction = performance.now();
  };
  const onPointerDown = (e) => {
    dragging = true; dragOrigin = e.clientX; angleOrigin = dragTarget;
    slot.setPointerCapture(e.pointerId);
    lastInteraction = performance.now();
  };
  const onDrag = (e) => {
    if (!dragging) return;
    dragTarget = clamp(angleOrigin + (e.clientX - dragOrigin) * 0.018, -0.8, 0.8);
    lastInteraction = performance.now();
  };
  const onPointerUp = () => { dragging = false; lastInteraction = performance.now(); };

  slot.addEventListener('pointermove', onPointerMove);
  slot.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onDrag);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('resize', resize);

  // gancho de verificação — sem custo em produção, útil para provar por
  // fora que o desenho está acontecendo de verdade (PLANO §2.6)
  window.__knot3d = () => ({ frames, error: renderer.getContext().getError(), rotY: mesh.rotation.y, rotX: mesh.rotation.x });

  return () => {
    disposed = true;
    pauseObserver.disconnect();
    slot.removeEventListener('pointermove', onPointerMove);
    slot.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('resize', resize);
    slot.classList.remove('knot--gl');
    document.documentElement.classList.remove('gl-ativo');
    geo.dispose();
    material.dispose();
    renderer.dispose();
    delete window.__knot3d;
  };
}
