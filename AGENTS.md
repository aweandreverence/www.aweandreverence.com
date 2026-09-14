# AGENTS.md — aweandreverence.com

> This is a **public repository**. Do not commit secrets, credentials, API keys, or internal URLs.

## Deployment Architecture

- **Hosting**: GitHub Pages (static export)
- **Build output**: `docs/` directory (configured via `next.config.js` `distDir`)
- **Branch**: `master` is production — merges trigger the GitHub Pages Actions workflow
- **Build command**: `make build` (runs `next build`, copies `CNAME` and `.nojekyll`)
- **Deploy workflow**: `.github/workflows/deploy-pages.yml` uploads the committed `docs/` directory to GitHub Pages

## Repo Structure

```
├── src/
│   ├── pages/         # Next.js pages (file-based routing)
│   ├── components/    # React components
│   ├── config/        # Site configuration (SEO, nav links, skills)
│   ├── styles/        # SCSS modules and global styles
│   ├── utils/         # Utility functions (posts, tags)
│   └── posts/         # Markdown blog posts
├── docs/              # Static export output (committed for GitHub Pages)
├── public/            # Static assets (favicon, images)
├── next.config.js     # Next.js configuration
├── jsconfig.json      # Path aliases (@/* -> ./src/*)
├── package.json       # Dependencies and scripts
└── Makefile           # Build and deploy commands
```

## Development

```bash
make install    # Install dependencies
make dev        # Start dev server on port 3000
make build      # Production build to docs/
make format     # Format code with prettier
```

## Import Conventions

- Use `@/` path aliases for all internal imports (e.g., `@/components/base_page`)
- Import order (enforced by prettier): react → next → third-party → @/config → @/components → @/utils → @/styles → relative

## Blog Editorial Work

- Before drafting or substantially revising Jonathan Tsai's posts, read [VOICE.md](VOICE.md) and two or three relevant original posts linked there. Follow the author's current brief; do not use an earlier AI draft as the voice standard or invent personal experiences.
- Every new blog post must include a suitable **Unsplash hero/header image** and use that same image for Open Graph and Twitter previews. Follow [the frontmatter and verification contract](CONTRIBUTING.md#blog-hero-images-and-sharing-previews), including photographer credit, source provenance, alt text, dimensions, and description. Include imagery in the post workstream rather than leaving it as optional follow-up.
- Keep editorial reference documents outside `src/posts/`, whose loader treats every entry as a post. [VOICE.md](VOICE.md) owns the detailed voice guidance; avoid duplicating it here.
- Honor an explicit request for source-only editorial review: do not run a build or add generated `docs/` files or new screenshots until the author is ready. Keep the PR diff focused on source and documentation; label any earlier previews as reference only.
- Use SPEAR proportionately: scope the brief, plan the argument, execute the draft, assess it against the rubric in `VOICE.md`, and resolve the review gaps. Distinguish editorial-review readiness from publication readiness; build/export and visual checks may be deferred during source-only review, not skipped before publication. Merging or deployment still requires explicit authorization.

## Security Guidelines

- Never commit `.env` files, API keys, or credentials
- This is a public repo — all code is visible
- Blog posts in `src/posts/` are public content
- Use `src/posts/drafts/` for unpublished drafts (gitignored)

## AI Checklist

Before submitting changes:

For explicitly requested source-only editorial review, mark build/export requirements as pending in the PR rather than running them. Apply the remaining relevant checks now and complete deferred checks before publication, as described in [CONTRIBUTING.md](CONTRIBUTING.md).

- [ ] New blog posts have a suitable credited Unsplash hero and matching OG/Twitter previews
- [ ] For blog publication work, `npm run check:blog-images` passes after building, and image loading plus desktop/mobile presentation are verified
- [ ] `npm run build` succeeds without errors
- [ ] No relative `../` imports to sibling directories (use `@/` aliases)
- [ ] No secrets or credentials in committed files
- [ ] Changes to `src/` are reflected in `docs/` via `make build`
- [ ] Deployment changes preserve the committed `docs/` Pages artifact and the GitHub Actions source

## GitHub Pages Actions

GitHub Pages deployment is handled by the `Deploy GitHub Pages` workflow. After this workflow is merged, confirm the repository Settings → Pages source is set to **GitHub Actions** and verify the first run publishes `docs/` successfully.
