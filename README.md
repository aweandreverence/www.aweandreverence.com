# www.aweandreverence.com

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.aweandreverence.com/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.aweandreverence.com/actions/workflows/deploy-pages.yml)

Static Next.js site for [www.aweandreverence.com](https://www.aweandreverence.com/). Production output is committed in `docs/` for GitHub Pages.

## Deployment

Merges to `master` trigger the `Deploy GitHub Pages` workflow, which uploads the committed `docs/` directory to GitHub Pages.

After the workflow is merged, confirm repository Settings → Pages is switched to **GitHub Actions** as the source and verify the first workflow run publishes successfully.
