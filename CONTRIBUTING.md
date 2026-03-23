# Contributing to aweandreverence.com

## Branch Policy

**No direct pushes to `master`.** All changes must go through a Pull Request.

1. Create a feature branch from `master`
2. Make your changes
3. Open a PR against `master`
4. Get at least one approval
5. Merge the PR

## Screenshot Requirement

**Every PR that touches UI must include a screenshot** attached to the PR description. This is non-negotiable — reviewers need to see what changed visually before approving.

For non-visual changes (config, docs-only, build scripts), a screenshot is optional but appreciated.

## Build & Deploy

This site uses NextJS with static export to the `docs/` directory, deployed via GitHub Pages.

```bash
# Build the NextJS site (all contributors)
make build
```

**`make deploy` is admin-only.** Only admins run the deploy step to export to `docs/` and push to `master`. Contributors should only run `make build` to verify their changes locally.

## Architecture

- **NextJS** — shared components, layouts, headers/footers
- **Static export** — `docs/` directory serves via GitHub Pages
- **Source code** — lives in `src/` directory
- **Path aliases** — use `@/` for internal imports (e.g., `@/components/base_page`)
