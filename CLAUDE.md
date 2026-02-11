# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo of standalone static websites for various clients/projects. Each subdirectory is an independent site with its own Docker configuration and assets. There is no shared build system or package manager at the root level.

## Running Locally

Each site can be run independently via Docker Compose:

```bash
# Root site (PHP 8.2 Apache, port 8080)
docker-compose up

# mayaodonto (Apache httpd, port 8080)
cd mayaodonto && docker-compose up

# maridasgracas (Nginx Alpine)
cd maridasgracas && docker-compose up
```

No test suite or linting is configured at the project level.

## Architecture

- **Monorepo of static sites** — each directory is a self-contained website (HTML/CSS/JS) with its own Dockerfile/docker-compose
- **No shared dependencies** — sites use CDN-loaded libraries (Bootstrap 5, jQuery, Swiper.js, Alpine.js, Pico CSS, GSAP, Font Awesome)
- **Minimal backend** — only `maridasgracas/back_end/formulario.php` has server-side logic (form handling, no database)
- **SCSS sources** exist in `mayaodonto/assets/sass/` and `linkstiaju/scss/` but have no automated compilation pipeline

## Key Sites

| Directory | Description | Stack |
|-----------|-------------|-------|
| `mayaodonto/` | Dental clinic site (HTML5 UP Stellar template) | jQuery, SASS, Apache |
| `maridasgracas/` | Medical/dental site | Bootstrap 5, Swiper, GSAP, Nginx, PHP |
| `vet_in_house/` | Veterinary site | Glider.js carousel |
| `linkstiaju/` | Link aggregator with SCSS | SCSS, vanilla CSS |
| `jucelia/` | WhatsApp link hub | Vanilla HTML/CSS |
| `pix/` | Payment/QR code page | Alpine.js, Pico CSS |

## Git Conventions

- Commits are short, lowercase descriptions (e.g., "add new link prod", "create jucelia")
- Remote: `git@github.com:cristhianocunha/cristhianocunha_top.git`
- Branch: `main`
