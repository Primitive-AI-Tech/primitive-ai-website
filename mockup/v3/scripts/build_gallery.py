"""Rebuild the offline V3 review gallery and manifest from saved images and board data."""
from pathlib import Path
from html import escape as h
import hashlib
import json
import struct

base = Path(__file__).resolve().parents[1]
repo = base.parents[1]
boards = json.loads((base / 'docs/boards.json').read_text())
for board in boards:
    image = base / 'images' / board.get('image_file', board['file'] + '.png')
    if not image.exists():
        raise SystemExit(f'Missing board: {image}')
    data = image.read_bytes()
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise SystemExit(f'Expected PNG: {image}')
    board.update(image=f"images/{image.name}", prompt=f"prompts/{board['file']}.txt", width=struct.unpack('>I', data[16:20])[0], height=struct.unpack('>I', data[20:24])[0], bytes=len(data), sha256=hashlib.sha256(data).hexdigest(), generation='Built-in Image Generation')
    # Any selected correction is explicit, while the original prompt stays available.
    corrected = base / 'prompts' / (board['file'] + '-correction.txt')
    if corrected.exists():
        board['correction_prompt'] = 'prompts/' + corrected.name
(base / 'manifest.json').write_text(json.dumps(boards, indent=2, ensure_ascii=False) + '\n')
css = (base / 'gallery.css').read_text()
nav = ''.join(f'<a href="#board-{b["id"]}">{b["id"]} {h(b["title"])}</a>' for b in boards)
sections = []
for b in boards:
    rows = ''.join(f'<tr><th scope="row">{h(name)}</th><td>{h(description)}</td></tr>' for name, description in b['components'])
    sections.append(f'''<section class="board" id="board-{b['id']}">
<div class="board-heading"><span>{b['id']}</span><div><p class="eyebrow">{h(b['route'])}</p><h2>{h(b['title'])}</h2><p>{h(b['description'])}</p></div></div>
<div class="board-layout"><a class="board-image" href="{b['image']}" target="_blank" rel="noopener"><img src="{b['image']}" alt="Primitive AI V3 mockup: {h(b['title'])}" loading="lazy" width="{b['width']}" height="{b['height']}"><span>Open full-size image ↗ · {b['width']} × {b['height']}</span></a>
<aside><h3>Components and behavior</h3><table><tbody>{rows}</tbody></table><p class="aside-links"><a href="docs/component-guide.md">Full specification</a> · <a href="docs/review-notes.md">Record design feedback</a> · <a href="{b['prompt']}">Generation prompt</a></p></aside></div></section>''')
html = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Primitive AI · V3 design review</title><style>{css}</style></head>
<body><header><img src="references/company-logo.png" alt="Primitive AI original logo"><p class="eyebrow">DESIGN V3 · 8 NOVEMBER 2026</p><h1>One platform.<br>More ways to put AI to work.</h1><p>Eight image boards extend the current blue/navy design with broader applications, restored custom AI development, the fuller company journey and page-level navigation.</p><div class="actions"><a href="#board-01">Start the visual review</a><a href="docs/review-notes.md">Record decisions</a><a href="logo-assets.html">Real logo assets</a><a href="../../docs/website-migration-plan.md">Migration plan</a></div></header>
<nav aria-label="Mockup boards">{nav}</nav>
<main><div class="context"><strong>Current design, extended before implementation.</strong> Proposed topbar: <strong>Home · Products · Services · About · Updates</strong>, plus language and contact. Core Agentic, applications, customers, economics and delivery remain within the homepage. Products and Services are recommended as separate pages; About is <code>/about</code> and Updates is <code>/update</code>. These boards revise the design package; production React pages and routes are unchanged.</div>
<section class="page-map" aria-labelledby="map-title"><h2 id="map-title">Proposed page structure</h2><div class="map-grid"><a href="#board-01"><b>Home</b><code>/</code><span>Complete Core Agentic story</span></a><a href="#board-06"><b>Products</b><code>/products</code><span>Flagship and specialist offerings</span></a><a href="#board-07"><b>Services</b><code>/services</code><span>Custom AI development</span></a><a href="#board-04"><b>About</b><code>/about</code><span>Founder, journey and principles</span></a><a href="#board-08"><b>Updates</b><code>/update</code><span>Company and product editorial</span></a></div><p><a href="#board-08">Talk to our team → Contact</a> remains the primary action. Board links here navigate this review gallery, not new production routes.</p></section>
<p class="context">Boards 01–03 show selected homepage segments; the <a href="../../docs/website-migration-plan.md#2-homepage-flow">migration plan</a> specifies their final order. Names are acceptable in mockups; the real website requires authentic customer and partner logo images. Economic examples and diagram activity are illustrative. Editorial titles are drafts.</p>
{''.join(sections)}
<footer><a href="docs/decision-ledger.md">Decision ledger</a> · <a href="docs/component-guide.md">Component guide</a> · <a href="docs/provenance.md">Sources and provenance</a> · <a href="docs/logo-assets.json">Logo manifest</a> · <a href="manifest.json">Image manifest</a> · <a href="../v2/index.html">Earlier V2</a><p>Original brand and founder assets must be reused directly in the implementation. Generated image text is a visual reference; exact content and interaction requirements are in the specification. No deployment is part of this design revision.</p></footer></main></body></html>'''
(base / 'index.html').write_text(html)

assets = json.loads((base / 'docs/logo-assets.json').read_text())
groups = []
for role in ['customer', 'partner']:
    cards = []
    for asset in assets['assets']:
        if asset['relationship'] != role:
            continue
        path = asset['source_path']
        if path:
            # This sheet is in mockup/v3; public originals remain in the repository.
            relative = '../../' + path if path.startswith('public/') else path.removeprefix('mockup/v3/')
            visual = f'<img src="{h(relative)}" alt="{h(asset["name"])} original logo">'
            status = 'Authentic local asset' if asset['status'] == 'authentic-local-asset' else 'Official NEU artwork saved'
        else:
            visual = '<div class="missing">Authentic artwork<br>still needed</div>'
            status = 'Missing source file — build task'
        link = f'<a href="{h(asset["source_url"])}">Official source</a>' if asset['source_url'] else ''
        cards.append(f'<article class="logo-card">{visual}<h3>{h(asset["name"])}</h3><p>{h(status)}</p>{link}</article>')
    groups.append(f'<section><h2>{"Customers · 8" if role == "customer" else "Partners · 4"}</h2><div class="logos">{"".join(cards)}</div></section>')
logo_css = '''.logos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin:24px 0 48px}.logo-card{padding:24px;background:#fff;border:1px solid #c5d8ef;border-radius:20px;min-width:0}.logo-card img{display:block;width:100%;height:110px;object-fit:contain}.logo-card h3{font-size:18px;margin:22px 0 8px;overflow-wrap:anywhere}.logo-card p{font-size:14px;line-height:1.6;color:#526278}.missing{display:flex;align-items:center;justify-content:center;height:110px;border:2px dashed #acbad0;border-radius:12px;color:#64748b;text-align:center;line-height:1.6}@media(max-width:1000px){.logos{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.logos{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.logo-card{padding:18px}.logo-card img{height:90px}}@media(max-width:360px){.logos{grid-template-columns:1fr}}'''
(base / 'logo-assets.html').write_text(f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Primitive AI · authentic logo assets</title><style>{css}{logo_css}</style></head><body><header><p class="eyebrow">V3 · REAL ASSET REVIEW</p><h1>Real organizations.<br>Original artwork.</h1><p>This sheet displays saved source images. It is the asset reference for the later build, separate from the text-name treatment allowed in the mockup images.</p><div class="actions"><a href="index.html#board-03">Back to V3 board 03</a><a href="docs/logo-assets.json">Asset manifest</a></div></header><main><p class="context">Eight customers and four partners, classified by the owner. NEU uses authentic artwork from its official resource kit. Ymner and TNE remain explicit missing-artwork tasks. These relationships are not automatically Core Agentic deployments.</p>{''.join(groups)}<footer><a href="docs/provenance.md#neu-primary-sources">NEU provenance</a> · <a href="docs/component-guide.md">Build requirements</a><p>Use real image assets, preserve colors and aspect ratio, size optically on a light surface and expose full organization names. Do not generate substitute corporate marks or treat typeset mockup names as completed logo artwork.</p></footer></main></body></html>''')
print(f'Generated gallery, logo asset sheet and metadata for {len(boards)} selected boards.')
