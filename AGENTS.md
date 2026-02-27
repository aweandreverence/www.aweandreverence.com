# AGENTS.md — aweandreverence.com

> This is a **public repository**. Do not commit secrets, credentials, API keys, or internal URLs.

## Deployment Architecture

- **Hosting**: GitHub Pages (static export)
- **Build output**: `docs/` directory (configured via `next.config.js` `distDir`)
- **Branch**: `master` is production — merges trigger deployment
- **Build command**: `make build` (runs `next build`, copies `CNAME` and `.nojekyll`)
- **Deploy command**: `make deploy` (builds, commits `docs/`, pushes to master)

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

## Security Guidelines

- Never commit `.env` files, API keys, or credentials
- This is a public repo — all code is visible
- Blog posts in `src/posts/` are public content
- Use `src/posts/drafts/` for unpublished drafts (gitignored)

## AI Checklist

Before submitting changes:

- [ ] `yarn build` succeeds without errors
- [ ] No relative `../` imports to sibling directories (use `@/` aliases)
- [ ] No secrets or credentials in committed files
- [ ] Changes to `src/` are reflected in `docs/` via `make build`
