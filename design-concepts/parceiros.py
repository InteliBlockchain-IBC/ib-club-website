#!/usr/bin/env python3
"""
Prepara os logos dos parceiros para o carrossel, a partir dos arquivos originais.

Duas etapas:
1. Tira o fundo chapado — são avatares do LinkedIn com fundo embutido, que em
   escala de cinza viram retângulos de lama.
2. Normaliza por PESO ÓPTICO, não por caixa delimitadora. Normalizar pela caixa
   é o que deixava tudo torto: as proporções vão de 0,63 (Ethereum Brasil) a
   5,46 (VinteUm), e a densidade de tinta de 15% (Inteli) a 76% (Chainlink).
   Ink-area puro erra para o outro lado — infla marcas esparsas. Uso a média
   geométrica entre a escala por área de tinta e a escala por altura, que é o
   compromisso usual em mural de logos.
"""
import math, pathlib, subprocess
import numpy as np
from PIL import Image

RAIZ  = pathlib.Path('/home/messiasolivindo/Documentos/github/inteli_blockchain/projetos/ib-club-website')
ORIG  = RAIZ / 'client/src/components/imgs'
DEST  = RAIZ / 'design-concepts/assets/parceiros'
DEST.mkdir(parents=True, exist_ok=True)

# origem, fuzz do floodfill, inverter a marca inteira, clarear só o quase-preto.
# O Inteli saiu da lista: é a faculdade, não parceiro do clube nesta faixa.
FONTES = [
    ('stellar',        'Stellar_Symbol.png',            None,  True,  False),  # preta em transparente
    ('ethereumbrasil', 'ethereumbrasil_logo.jpeg',      '18%', False, False),
    ('vinteum',        'vinteum.png',                   None,  False, True),   # lettering preto -> gelo
    ('ethsamba',       'ethsamba.jpg',                  '22%', False, False),
    ('ethlatam',       'ethlatam.png',                  '22%', False, False),
    ('starknet',       'starknet_foundation_logo.jpeg', '20%', False, False),
    ('chainlink',      'chainlink_labs_logo.jpeg',      '12%', False, False),
    ('nearx',          'nearx.jpeg',                    '25%', False, False),
]

TILE_W, TILE_H = 380, 190     # 2:1, o dobro do tamanho de exibição
ALVO_AREA = 8200              # área de tinta desejada, px²
ALVO_ALT  = 118               # altura desejada, px
MAX_H, MAX_W = 150, 350       # nenhum logo passa disto

TMP = pathlib.Path('/tmp/parc_tmp'); TMP.mkdir(exist_ok=True)

def sem_fundo(src, dst, fuzz):
    """Floodfill a partir das bordas. Coordenadas literais: %[fx:] não
       expande dentro de -draw."""
    w, h = Image.open(src).size
    pts = [(0,0), (w-1,0), (0,h-1), (w-1,h-1), (w//2,0), (w//2,h-1), (0,h//2), (w-1,h//2)]
    cmd = ['convert', str(src), '-alpha', 'set', '-fuzz', fuzz, '-fill', 'none']
    for x, y in pts:
        cmd += ['-draw', f'color {x},{y} floodfill']
    cmd += [str(dst)]
    subprocess.run(cmd, check=True, capture_output=True)

linhas = []
for nome, arq, fuzz, inverter, clarear in FONTES:
    src = ORIG / arq
    tmp = TMP / f'{nome}.png'
    if fuzz:
        sem_fundo(src, tmp, fuzz)
    else:
        subprocess.run(['convert', str(src), tmp], check=True, capture_output=True)
    im = Image.open(tmp).convert('RGBA')
    if inverter:
        r, g, b, a = im.split()
        im = Image.merge('RGBA', (r.point(lambda v: 255-v), g.point(lambda v: 255-v),
                                  b.point(lambda v: 255-v), a))

    if clarear:
        # troca só o quase-preto por gelo, preservando o ícone colorido
        d = np.array(im)
        escuro = (d[:,:,:3].max(axis=2) < 80) & (d[:,:,3] > 30)
        d[escuro, 0], d[escuro, 1], d[escuro, 2] = 0xe8, 0xf1, 0xf2
        im = Image.fromarray(d)

    a = np.array(im.split()[3])
    ys, xs = np.nonzero(a > 30)
    rec = im.crop((xs.min(), ys.min(), xs.max()+1, ys.max()+1))
    w, h = rec.size
    tinta = (np.array(rec.split()[3]) > 30).sum()

    s_area = math.sqrt(ALVO_AREA / tinta)     # iguala peso visual
    s_alt  = ALVO_ALT / h                     # iguala altura
    s = math.sqrt(s_area * s_alt)             # compromisso
    s = min(s, MAX_H / h, MAX_W / w)

    nw, nh = max(1, round(w*s)), max(1, round(h*s))
    tela = Image.new('RGBA', (TILE_W, TILE_H), (0,0,0,0))
    tela.paste(rec.resize((nw, nh), Image.LANCZOS), ((TILE_W-nw)//2, (TILE_H-nh)//2))
    tela.save(DEST / f'{nome}.png')
    subprocess.run(['convert', str(DEST/f'{nome}.png'), '-dither', 'None',
                    '-colors', '96', '-strip', str(DEST/f'{nome}.png')], check=True)
    linhas.append((nome, w, h, tinta, round(s_area,2), round(s_alt,2), round(s,2), nw, nh))

print(f"{'logo':16}{'recorte':>11}{'tinta':>7}{'s_área':>8}{'s_alt':>7}{'s':>6}{'final':>11}")
for n,w,h,t,sa,sh,s,nw,nh in linhas:
    print(f"{n:16}{w:5}x{h:<5}{t:7}{sa:8}{sh:7}{s:6}{nw:6}x{nh:<5}")
