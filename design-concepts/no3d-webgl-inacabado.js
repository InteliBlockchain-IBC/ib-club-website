/* ══════════════════════════════════════════════════════════════════════
   O NÓ EM 3D — WebGL próprio, sem dependência.

   As faces da frente e do verso são a arte oficial usada como textura,
   então nenhum pixel da marca é reconstruído. As paredes laterais saem do
   contorno vetorial extraído do próprio PNG, verificado contra o original:
   a divergência é uma franja de subpixel na borda, não erro de forma.

   Cai para a imagem chapada se não houver WebGL, se o usuário pedir menos
   movimento, ou se não houver ponteiro.
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  const cv    = document.querySelector('.no3d');
  const fonte = document.querySelector('.no3d__fonte');
  const dobra = document.querySelector('.dobra');
  if (!cv || !fonte || !dobra) return;

  const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calmo) return;                                   // fica o PNG

  const gl = cv.getContext('webgl', { alpha: true, antialias: true,
    premultipliedAlpha: false, preserveDrawingBuffer: true });
  // preserveDrawingBuffer: sem isso o buffer é descartado na composição,
  // e um único desenho (aba oculta, rAF suspenso) some da tela.
  if (!gl) return;                                     // fica o PNG

  const GEO = window.__NO_GEO__;
  if (!GEO) return;

  // ── matrizes ──────────────────────────────────────────────────────────
  const perspectiva = (fov, asp, n, f) => {
    const t = 1 / Math.tan(fov / 2);
    return [t/asp,0,0,0, 0,t,0,0, 0,0,(f+n)/(n-f),-1, 0,0,2*f*n/(n-f),0];
  };
  const mult = (a, b) => {
    const o = new Array(16).fill(0);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++)
      for (let k = 0; k < 4; k++) o[i*4+j] += a[i*4+k] * b[k*4+j];
    return o;
  };
  const rotX = r => { const c=Math.cos(r), s=Math.sin(r);
    return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]; };
  const rotY = r => { const c=Math.cos(r), s=Math.sin(r);
    return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]; };
  const transl = (x,y,z) => [1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1];

  // ── geometria ─────────────────────────────────────────────────────────
  const W = GEO.largura, H = GEO.altura;
  const ESC = 2 / Math.max(W, H);          // normaliza para ~[-1,1]
  const T = GEO.espessura;                 // meia-espessura em unidades do modelo

  const px = x => (x - W / 2) * ESC;
  const py = y => -(y - H / 2) * ESC;
  const uu = x => x / W;
  const vv = y => y / H;

  const dados = [];                        // pos(3) uv(2) normal(3) tipo(1)
  const põe = (x, y, z, u, v, nx, ny, nz, tipo) =>
    dados.push(x, y, z, u, v, nx, ny, nz, tipo);

  // faces: dois quads com a textura (alpha-test no shader)
  for (const [z, nz, tipo] of [[T, 1, 0], [-T, -1, 1]]) {
    const q = [[0,0],[0,H],[W,H], [0,0],[W,H],[W,0]];
    for (const [x, y] of q) põe(px(x), py(y), z, uu(x), vv(y), 0, 0, nz, tipo);
  }

  // paredes: um quad por aresta do contorno, cor amostrada da própria textura
  for (const poly of GEO.poligonos) {
    // sentido do polígono, para a normal apontar para fora
    let area = 0;
    for (let i = 0; i < poly.length; i++) {
      const [x1,y1] = poly[i], [x2,y2] = poly[(i+1) % poly.length];
      area += x1*y2 - x2*y1;
    }
    const sinal = area > 0 ? 1 : -1;

    for (let i = 0; i < poly.length; i++) {
      const [x1,y1] = poly[i], [x2,y2] = poly[(i+1) % poly.length];
      const ex = px(x2) - px(x1), ey = py(y2) - py(y1);
      const L = Math.hypot(ex, ey) || 1;
      const nx =  (ey / L) * sinal, ny = -(ex / L) * sinal;

      // amostra a cor um pouco para dentro, para não pegar a franja transparente
      const mx = (x1 + x2) / 2 - nx * 3, my = (y1 + y2) / 2 + ny * 3;
      const u = uu(mx), v = vv(my);

      const A=[px(x1),py(y1), T], B=[px(x2),py(y2), T];
      const C=[px(x2),py(y2),-T], D=[px(x1),py(y1),-T];
      for (const p of [A,B,C, A,C,D]) põe(p[0],p[1],p[2], u,v, nx,ny,0, 2);
    }
  }

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dados), gl.STATIC_DRAW);
  const N_VERT = dados.length / 9;

  // ── shaders ───────────────────────────────────────────────────────────
  const VS = `
    attribute vec3 aPos; attribute vec2 aUV; attribute vec3 aNor; attribute float aTipo;
    uniform mat4 uMVP, uModelo;
    varying vec2 vUV; varying vec3 vNor; varying float vTipo;
    void main(){
      vUV = aUV; vTipo = aTipo;
      vNor = normalize(mat3(uModelo) * aNor);
      gl_Position = uMVP * vec4(aPos, 1.0);
    }`;
  const FS = `
    precision mediump float;
    uniform sampler2D uTex;
    varying vec2 vUV; varying vec3 vNor; varying float vTipo;
    void main(){
      vec4 t = texture2D(uTex, vUV);
      if (t.a < 0.5) discard;                       // recorta o vazio do nó
      vec3 luz = normalize(vec3(-0.35, 0.6, 0.72));
      float d  = max(dot(normalize(vNor), luz), 0.0);
      vec3 cor = t.rgb;
      if (vTipo > 1.5) {                            // parede lateral
        cor = mix(cor * 0.30, cor * 1.06, d);
        float esp = pow(d, 22.0) * 0.5;             // brilho especular estreito
        cor += esp;
      } else if (vTipo > 0.5) {                     // verso
        cor *= 0.34;
      } else {                                      // frente
        cor *= 0.90 + 0.16 * d;
      }
      gl_FragColor = vec4(cor, 1.0);
    }`;
  const compilar = (tipo, src) => {
    const s = gl.createShader(tipo);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('shader:', gl.getShaderInfoLog(s)); return null;
    }
    return s;
  };
  const vs = compilar(gl.VERTEX_SHADER, VS), fs = compilar(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return;
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const STRIDE = 9 * 4;
  const liga = (nome, n, off) => {
    const l = gl.getAttribLocation(prog, nome);
    if (l < 0) return;
    gl.enableVertexAttribArray(l);
    gl.vertexAttribPointer(l, n, gl.FLOAT, false, STRIDE, off * 4);
  };
  liga('aPos', 3, 0); liga('aUV', 2, 3); liga('aNor', 3, 5); liga('aTipo', 1, 8);

  const uMVP = gl.getUniformLocation(prog, 'uMVP');
  const uModelo = gl.getUniformLocation(prog, 'uModelo');

  // ── textura: a arte oficial ───────────────────────────────────────────
  const tex = gl.createTexture();
  const montarTextura = () => {
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, fonte);
    // a arte é 380x379 — NÃO é potência de dois. Em WebGL1 isso proíbe
    // mipmap e wrap repetido: com LINEAR_MIPMAP_LINEAR a textura fica
    // incompleta, amostra transparente e o discard apaga o objeto inteiro.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };

  gl.enable(gl.DEPTH_TEST);
  // sem back-face culling: são ~90 triângulos, e o depth test já resolve.
  // Ligar culling só reintroduziria bug de sentido de vértice.
  gl.clearColor(0, 0, 0, 0);

  // ── estado e laço ─────────────────────────────────────────────────────
  let alvoX = 0, alvoY = 0, curX = 0, curY = 0, t0 = 0, vivo = false;

  function medir() {
    const r = cv.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(r.width * dpr));
    const h = Math.max(1, Math.round(r.height * dpr));
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    gl.viewport(0, 0, cv.width, cv.height);
  }

  function desenhar(ts, unico) {
    if (!t0) t0 = ts;
    const s = (ts - t0) / 1000;
    // aproximação suave do alvo, e uma respiração leve quando parado
    curX += (alvoX - curX) * 0.10;
    curY += (alvoY - curY) * 0.10;
    const balX = vivo ? 0 : Math.sin(s * 0.55) * 0.10;
    const balY = vivo ? 0 : Math.cos(s * 0.42) * 0.05;

    medir();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const asp = cv.width / cv.height;
    const P = perspectiva(0.62, asp, 0.1, 12);
    const V = transl(0, 0, -4.15);
    const M = mult(rotX(curY + balY), rotY(curX + balX));
    gl.uniformMatrix4fv(uModelo, false, M);
    gl.uniformMatrix4fv(uMVP, false, mult(M, mult(V, P)));
    gl.drawArrays(gl.TRIANGLES, 0, N_VERT);
    if (!unico) requestAnimationFrame(desenhar);
  }

  function iniciar() {
    montarTextura();
    cv.classList.add('no3d--pronto');
    fonte.classList.add('no3d__fonte--oculta');
    // um quadro síncrono antes do laço: se o rAF atrasar ou não disparar
    // (aba em segundo plano, headless), a marca já está desenhada
    desenhar(performance.now(), true);
    requestAnimationFrame(desenhar);
  }
  if (fonte.complete && fonte.naturalWidth) iniciar();
  else fonte.addEventListener('load', iniciar, { once: true });

  // ── ponteiro ──────────────────────────────────────────────────────────
  if (matchMedia('(hover: hover)').matches) {
    dobra.addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      const r = dobra.getBoundingClientRect();
      alvoX = ((e.clientX - r.left) / r.width  - 0.5) * 1.15;
      alvoY = ((e.clientY - r.top)  / r.height - 0.5) * 0.62;
      vivo = true;
    });
    dobra.addEventListener('pointerleave', () => { alvoX = 0; alvoY = 0; vivo = false; });
  }
  addEventListener('resize', medir);
})();
