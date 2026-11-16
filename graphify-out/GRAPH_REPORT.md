# Graph Report - cristhianocunha_top  (2026-11-16)

## Corpus Check
- Large corpus: 388 files · ~896,570 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 1069 nodes · 1779 edges · 90 communities (39 shown, 51 thin omitted)
- Extraction: 88% EXTRACTED · 11% INFERRED · 1% AMBIGUOUS · INFERRED: 202 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Diagram Renderer (assets)
- jQuery Minified Internals
- Prism Syntax Highlighter
- Glider.js Minified Internals
- Prism Syntax Highlighter (copy)
- jQuery Minified Internals (2)
- Canvas Bake and Pause Runtime
- Project Overview and Site Index
- npm Package Manifests
- npm Package Manifests (copy)
- Curriculum Vitae Content
- Maya Odontologia Home Page
- Jucelia WhatsApp Link Hub
- Card Kit Object Cards
- Scheduling and FAQ Widget
- Docker Compose Services
- Motion Timing Library
- Motion Enter Sequences
- Developer Tools Card Fragment
- Inbox Email Demo Fragment
- PIX Payment Keys Page
- Text Layout Animations
- Text Panel Split Fragment
- Fragment Index Builder
- Docker Compose Networking
- Bento Layout Fragment
- Vet In Home Landing Page
- Vet Course Landing Page
- Integrations Card Fragment
- Glider.js Demo Page
- Chat Card Fragment
- Card Visual Effects
- Stellar Template Main Script
- Glider.js Documentation Site
- Stellar Template Main Script (copy)
- App Docker Service Config
- Stellar Template Demo Pages
- Stellar Template License and Credits
- PIX QR Code Generator
- GSAP CSS Animation Demo
- GSAP CSS Animation Demo (min)
- Letter Animation Demo
- Letter Animation Demo (min)
- Glider.js License and README
- Vet Modal Script
- Service Detail Banner Fragment

## God Nodes (most connected - your core abstractions)
1. `loop()` - 46 edges
2. `Diagram` - 32 edges
3. `ui/index.html UI fragment kit page, 19 fragments on effect grounds` - 28 edges
4. `Maya Odontologia home page` - 26 edges
5. `cards.html feature cards demo (nine layouts) and cards.css` - 22 edges
6. `Cristhiano Cunha (full stack web developer)` - 14 edges
7. `init()` - 13 edges
8. `Dra. Maria das Graças landing page (Bootstrap 5)` - 13 edges
9. `Glider.js library` - 13 edges
10. `index.html: Cristhiano Cunha portfolio homepage` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Ctrl-K command palette pattern` --semantically_similar_to--> `filteredCommands getter (category and text filter)`  [INFERRED] [semantically similar]
  assets/ui/search/fragment.html → docker_aula/index.html
- `Theme segmented control (Light / Dark / Auto)` --semantically_similar_to--> `Light/dark theme toggle button (#theme-toggle)`  [INFERRED] [semantically similar]
  assets/ui/slider/fragment.html → curriculo/index.html
- `Staged terminal output reveal (data-term-* hooks)` --semantically_similar_to--> `AOS scroll reveal (data-aos attributes)`  [INFERRED] [semantically similar]
  assets/ui/terminal-run/fragment.html → maridasgracas/index.html
- `copyToClipboard() method` --semantically_similar_to--> `copyCode(button) helper`  [INFERRED] [semantically similar]
  docker_aula/index.html → git/index.html
- `WhatsApp contact CTA` --semantically_similar_to--> `WhatsApp click-to-chat redirect (3 second timer)`  [INFERRED] [semantically similar]
  vet_in_house/index.html → whatsapp/index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Chatbot flow: WhatsApp, Typebot, JavaScript validation, Laravel API, SQL database** — index_whatsapp, index_typebot, index_javascript, index_laravel, index_sql_database, index_api_laravel_diagram [EXTRACTED 1.00]
- **Client sites showcased on the portfolio homepage** — index_trabalhos_section, claude_mayaodonto, claude_maridasgracas, claude_vet_in_house, index_mariaecristhianostudio [EXTRACTED 1.00]
- **UI fragment kit: 19 fragments placed and looped by the kit page** — assets_ui_index, assets_ui_index_fragment_manifest, assets_ui_index_place_map, assets_ui_window_fragment, assets_ui_chat_fragment, assets_ui_cursor_fragment, assets_ui_notify_fragment, assets_ui_toggles_fragment, assets_ui_stat_fragment, assets_ui_search_fragment, assets_ui_integrations_fragment, assets_ui_slider_fragment, assets_ui_voice_fragment, assets_ui_files_fragment, assets_ui_calendar_fragment, assets_ui_code_fragment, assets_ui_diff_review_fragment, assets_ui_terminal_run_fragment, assets_ui_pipeline_board_fragment, assets_ui_doc_fragment, assets_ui_checklist_fragment, assets_ui_apps_fragment [EXTRACTED 1.00]
- **UI fragment family sharing the ui-panel root class system** — assets_ui_search_fragment, assets_ui_slider_fragment, assets_ui_stat_fragment, assets_ui_terminal_run_fragment, assets_ui_toggles_fragment, assets_ui_voice_fragment, assets_ui_window_fragment [EXTRACTED 1.00]
- **Link-hub page template (profile, link-card list, studio footer credit)** — jucelia_index, linkstiaju_index, linkstiaju_v2_index, mariaecristhianostudio_index [INFERRED 0.85]
- **HTML5 UP Stellar template pages and their CC BY 3.0 license** — mayaodonto_elements, mayaodonto_generic, mayaodonto_elements_stellar_template, mayaodonto_license [INFERRED 0.85]
- **Home page composed from fragments** — mayaodonto_index, mayaodonto_componentes_banner, mayaodonto_componentes_head_nav, mayaodonto_componentes_servicos [INFERRED 0.85]
- **Service detail pages and their fragment set** — mayaodonto_servicos_componentes_serv_banner, mayaodonto_servicos_componentes_serv_head_nav, mayaodonto_servicos_componentes_serv_servicos, mayaodonto_servicos_bucomaxilo_index, mayaodonto_servicos_canal_index, mayaodonto_servicos_clareamento_index, mayaodonto_servicos_frenectomia_index, mayaodonto_servicos_laser_index, mayaodonto_servicos_odontopediatra_index, mayaodonto_servicos_ortodontia_index, mayaodonto_servicos_sedacao_index [INFERRED 0.65]
- **Three near-identical service-list fragments** — mayaodonto_componentes_servicos, mayaodonto_servicos_componentes_servicos, mayaodonto_servicos_componentes_serv_servicos [INFERRED 0.85]
- **PIX payment pages** — pix_index, pix_index_copypix, pix_index_banco_param, pix_qrcode_index, pix_qrcode_index_pix_form [INFERRED 0.75]
- **Pages built from the Stellar HTML5 UP template** — vet_in_house_readme_stellar_template, vet_in_house_index, vet_in_house_elements, vet_in_house_generic, vet_in_house_curso_index [EXTRACTED 1.00]
- **Glider.js library with demo and docs pages** — vet_in_house_assets_glider_js_master_readme_glider_js, vet_in_house_assets_glider_js_master_index, vet_in_house_assets_glider_js_master_docs_index, vet_in_house_assets_glider_js_master_docs_index_native_scrolling, vet_in_house_assets_glider_js_master_docs_index_no_infinite_loop [INFERRED 0.85]

## Communities (90 total, 51 thin omitted)

### Community 0 - "Diagram Renderer (assets)"
Cohesion: 0.05
Nodes (46): api, auto(), axesOf(), CAPS, clamp(), cleanName(), Diagram, ease() (+38 more)

### Community 1 - "jQuery Minified Internals"
Cohesion: 0.06
Nodes (46): s(), i(), a(), ae(), be(), C(), ce(), ct() (+38 more)

### Community 2 - "Prism Syntax Highlighter"
Cohesion: 0.06
Nodes (39): G(), k(), P(), V(), n(), A(), at(), b() (+31 more)

### Community 3 - "Glider.js Minified Internals"
Cohesion: 0.06
Nodes (45): i(), a(), ae(), be(), C(), ce(), ct(), Ee() (+37 more)

### Community 4 - "Prism Syntax Highlighter (copy)"
Cohesion: 0.06
Nodes (39): G(), k(), P(), V(), n(), A(), at(), b() (+31 more)

### Community 5 - "jQuery Minified Internals (2)"
Cohesion: 0.07
Nodes (32): A(), at(), b(), be(), ce(), e(), Ee(), fe() (+24 more)

### Community 6 - "Canvas Bake and Pause Runtime"
Cohesion: 0.08
Nodes (40): addPause(), AGAIN, bakeDpr(), bakeDraw(), bakeOne(), bakeQueue, BASE, boxes (+32 more)

### Community 7 - "Project Overview and Site Index"
Cohesion: 0.09
Nodes (39): phone, CLAUDE.md project guidance for Claude Code, Each site runs on its own via Docker Compose, maridasgracas/back_end/formulario.php, the only server-side logic, jucelia site: WhatsApp link hub, linkstiaju site: link aggregator with SCSS, maridasgracas site: dental and medical, Bootstrap 5, Nginx, PHP, mayaodonto site: dental clinic, HTML5 UP Stellar template (+31 more)

### Community 8 - "npm Package Manifests"
Cohesion: 0.06
Nodes (38): author, bugs, url, description, devDependencies, http-server@^0.11.1, husky@1.2.0, lint-staged@8.1.0 (+30 more)

### Community 9 - "npm Package Manifests (copy)"
Cohesion: 0.06
Nodes (38): author, bugs, url, description, devDependencies, http-server@^0.11.1, husky@1.2.0, lint-staged@8.1.0 (+30 more)

### Community 10 - "Curriculum Vitae Content"
Cohesion: 0.07
Nodes (34): Curriculum vitae Markdown source, 4Linux, ADDSALES (Desenvolvedor Web JR III, 2025-present), Cloud computing (AWS, Azure), Caça Talentos DevOps program (selected among 30), Cristhiano Cunha (full stack web developer), Docker, Faculdade Descomplica (Pós-graduação lato sensu) (+26 more)

### Community 11 - "Maya Odontologia Home Page"
Cohesion: 0.17
Nodes (30): Home banner fragment, Home navigation fragment, Home services list fragment, Maya Odontologia home page, Parents' cafe area (Café Aconchegante), Dr. Júlio Oliveira, Dr. Rafael Maya, Dra. Ingrid Viégas (+22 more)

### Community 12 - "Jucelia WhatsApp Link Hub"
Cohesion: 0.10
Nodes (29): Dra. Jucelia Freitas link hub page, Agendar consulta booking link (Simples Dental, mayaodontologia), Dra. Jucelia Freitas (dentist), Dra. Juliana Maya link hub page (v1), Agendar consulta online booking link (Simples Dental, mayaodontologia), Google reviews link (Avalie no Google), Dra. Juliana Maya (pediatric dentist), Dra. Juliana Maya link hub page (v2 variant) (+21 more)

### Community 13 - "Card Kit Object Cards"
Cohesion: 0.11
Nodes (19): _lab/loops.html: UI loops lab, subset chosen by ?n=, _lab/object-card.html: object cards lab, Desk lamp printed in halftone, Phone printed in engraving, _lab/selftest.html: card kit self-test page, Self-test checks: pause clearance, held card cycles, files status words, cards.html feature cards demo (nine layouts) and cards.css, apply() sets data-theme and swaps data-fx ids per theme (+11 more)

### Community 14 - "Scheduling and FAQ Widget"
Cohesion: 0.14
Nodes (26): actionbar(), DAY_NAMES, DAYS, daySet(), faq(), forms(), glowOnHover(), GROUNDS (+18 more)

### Community 15 - "Docker Compose Services"
Cohesion: 0.07
Nodes (26): container_name, environment, image, restart, volumes, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_ROOT_PASSWORD (+18 more)

### Community 16 - "Motion Timing Library"
Cohesion: 0.12
Nodes (15): clamp(), ease, inCard(), phone(), reduced(), scrub(), still(), stillWhy() (+7 more)

### Community 17 - "Motion Enter Sequences"
Cohesion: 0.19
Nodes (19): boxOf(), counts(), enter(), enterSteps(), fontsIn(), hostOf(), init(), jump() (+11 more)

### Community 18 - "Developer Tools Card Fragment"
Cohesion: 0.16
Nodes (12): Developer tools cards: review, tests, build pipeline, init(), init(), init(), init(), init(), secs(), init() (+4 more)

### Community 19 - "Inbox Email Demo Fragment"
Cohesion: 0.16
Nodes (11): Inline email thread: Lena Fischer, broken lamp, refund EUR 48.00, 2x2 grid layout: one assistant for the whole inbox, Relay, fictional AI support assistant in the demo, init(), words(), init(), init(), Relay (AI customer-support agent) (+3 more)

### Community 20 - "PIX Payment Keys Page"
Cohesion: 0.21
Nodes (14): PIX keys page, Banco do Brasil PIX key, Inter PIX key, Mercado Pago PIX key, Midway (Riachuelo) PIX key, RecargaPlay PIX key, copyPIX clipboard function, gerarqrcodepix.com.br QR API (commented out) (+6 more)

### Community 21 - "Text Layout Animations"
Cohesion: 0.37
Nodes (12): collage(), film(), init(), letters(), liveWord(), lockLines(), other(), phone() (+4 more)

### Community 22 - "Text Panel Split Fragment"
Cohesion: 0.19
Nodes (9): init(), Text and panel split layout: weekly report, init(), 14-bar SVG trend sparkline, DATA, init(), PREV, Solved-without-a-person KPI (68%, up 7 pts) (+1 more)

### Community 23 - "Fragment Index Builder"
Cohesion: 0.17
Nodes (7): fragments, index, LAST, names, ORDER, prev, UI

### Community 24 - "Docker Compose Networking"
Cohesion: 0.17
Nodes (11): networks, web-network, services, web, container_name, image, driver, networks (+3 more)

### Community 25 - "Bento Layout Fragment"
Cohesion: 0.24
Nodes (7): Bento layout: set up in an afternoon, init(), rowsHTML(), clamp(), init(), Range slider with fill and thumb, Theme segmented control (Light / Dark / Auto)

### Community 26 - "Vet In Home Landing Page"
Cohesion: 0.22
Nodes (10): Alpine.js 3 (CDN), Vet in Home landing page, Cirurgias em geral service, Consulta veterinaria service, Exames laboratoriais service, Alpine.js photo gallery with modal, n8n hosted contact form (iframe source), n8n contact form modal (+2 more)

### Community 27 - "Vet Course Landing Page"
Cohesion: 0.20
Nodes (9): Mini curso pratico landing page (Tecnico Veterinario), Curso day 1 topics, Curso day 2 topics, Curso day 3 topics, WhatsApp enrollment CTA, WhatsApp contact CTA, WhatsApp redirect page, Bootstrap 5.3.0 (CDN) (+1 more)

### Community 28 - "Integrations Card Fragment"
Cohesion: 0.22
Nodes (4): init(), Integrations split card: connected apps, init(), POINTER_SVG

### Community 29 - "Glider.js Demo Page"
Cohesion: 0.31
Nodes (9): Glider.js demo page (16 slides), glider-compat.min.js polyfill bundle, Glider custom events, Firefox scrollbar-hiding workaround, Glider.js library, Paging controls (arrows and dots), Mobile-first responsive breakpoints, Glider.js demo page (curso copy) (+1 more)

### Community 30 - "Chat Card Fragment"
Cohesion: 0.36
Nodes (7): Inline chat widget: Northwind help, order 4790, Tall cards with panel on top: Email, Chat, Voice, isStill(), init(), sync(), isDarkSurface(), Animated 22-bar voice waveform

### Community 31 - "Card Visual Effects"
Cohesion: 0.29
Nodes (6): edge-glow light on the featured plan, glowOnHover() plays one edge-glow lap on hover or focus, gradient-mesh effect ground, grain-gradient effect ground, painterly-landscape effect ground, silk-folds effect ground

### Community 32 - "Stellar Template Main Script"
Cohesion: 0.29
Nodes (3): e(), scrollIt(), u()

### Community 33 - "Glider.js Documentation Site"
Cohesion: 0.32
Nodes (6): Glider.js documentation site, Glider.js demos (multiple, single, perspective, responsive, fractional, add/remove), Glider.js events reference, Lazy-loading images event hook example, Glider.js methods reference, Glider.js settings reference

### Community 34 - "Stellar Template Main Script (copy)"
Cohesion: 0.29
Nodes (3): e(), scrollIt(), u()

### Community 35 - "App Docker Service Config"
Cohesion: 0.29
Nodes (6): build, ports, volumes, services, app, version

### Community 36 - "Stellar Template Demo Pages"
Cohesion: 0.29
Nodes (7): Glider.js documentation site (curso copy), Stellar elements demo page (curso copy), Stellar generic page template (curso copy), Stellar elements demo page, Stellar generic page template, Scrollex plugin, Stellar one-page HTML5 UP template

### Community 37 - "Stellar Template License and Credits"
Cohesion: 0.29
Nodes (7): Creative Commons Attribution 3.0 Unported license text, Stellar template README, AJ (HTML5 UP author), Font Awesome icons, jQuery, Responsive Tools, Unsplash demo images

### Community 44 - "Glider.js License and README"
Cohesion: 0.67
Nodes (3): Glider.js MIT license text, Glider.js README, Glider.js MIT license text (curso copy)

## Ambiguous Edges - Review These
- `data-open / data-work / data-done status labels` → `Ticket row statuses (Open, Needs you, Solved)`  [AMBIGUOUS]
  assets/ui/window/fragment.html · relation: conceptually_related_to
- `Bucomaxilofacial service page` → `Service detail service cards fragment`  [AMBIGUOUS]
  mayaodonto/servicos/componentes_serv/servicos.html · relation: references
- `Root canal service page` → `Dra. Juliana Maya`  [AMBIGUOUS]
  mayaodonto/servicos/canal/index.html · relation: conceptually_related_to
- `Teeth whitening service page` → `Service detail service cards fragment`  [AMBIGUOUS]
  mayaodonto/servicos/componentes_serv/servicos.html · relation: references
- `Service detail service cards fragment` → `Low-level laser therapy service page`  [AMBIGUOUS]
  mayaodonto/servicos/componentes_serv/servicos.html · relation: references
- `Service detail service cards fragment` → `Orthodontics service page`  [AMBIGUOUS]
  mayaodonto/servicos/componentes_serv/servicos.html · relation: references
- `Low-level laser therapy service page` → `Dra. Jucélia Bezerra`  [AMBIGUOUS]
  mayaodonto/servicos/laser/index.html · relation: conceptually_related_to
- `Low-level laser therapy service page` → `Dra. Juliana Maya`  [AMBIGUOUS]
  mayaodonto/servicos/laser/index.html · relation: conceptually_related_to
- `PIX keys page` → `gerarqrcodepix.com.br QR API (commented out)`  [AMBIGUOUS]
  pix/index.html · relation: references
- `PIX payment form (key, name, city, amount, message)` → `script.js (referenced, not in chunk)`  [AMBIGUOUS]
  pix/qrcode/index.html · relation: references
- `script.js (referenced, not in chunk)` → `Copy PIX code button`  [AMBIGUOUS]
  pix/qrcode/index.html · relation: references

## Knowledge Gaps
- **61 isolated node(s):** `linkstiaju site: link aggregator with SCSS`, `jucelia site: WhatsApp link hub`, `pix site: payment QR page with Alpine.js and Pico CSS`, `PHP`, `4Linux Caca Talentos em DevOps selection program` (+56 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 363 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **51 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `s()` connect `jQuery Minified Internals` to `Diagram Renderer (assets)`, `Prism Syntax Highlighter`, `Glider.js Minified Internals`, `Prism Syntax Highlighter (copy)`, `jQuery Minified Internals (2)`?**
  _High betweenness centrality (0.218) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Maya Odontologia home page` (e.g. with `Home navigation fragment` and `Home banner fragment`) actually correct?**
  _`Maya Odontologia home page` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `linkstiaju site: link aggregator with SCSS`, `jucelia site: WhatsApp link hub`, `pix site: payment QR page with Alpine.js and Pico CSS` to the rest of the system?**
  _61 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Diagram Renderer (assets)` be split into smaller, more focused modules?**
  _Cohesion score 0.05048766494549627 - nodes in this community are weakly interconnected._
- **Why does `init()` connect `Diagram Renderer (assets)` to `Developer Tools Card Fragment`, `Inbox Email Demo Fragment`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `data-open / data-work / data-done status labels` and `Ticket row statuses (Open, Needs you, Solved)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Bucomaxilofacial service page` and `Service detail service cards fragment`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._