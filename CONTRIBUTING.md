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

During explicitly requested source-only editorial review, new screenshots may be deferred along with the build. Existing previews may remain linked as clearly labeled references. Complete the applicable visual checks before publication.

## Build & Deploy

This site uses NextJS with static export to the committed `docs/` directory, deployed to GitHub Pages by GitHub Actions after changes land on `master`.

```bash
# Build the NextJS site (all contributors)
make build
```

Contributors should run `make build` to verify source changes and commit the resulting `docs/` updates when the site output changes. Do not push directly to `master`; merged PRs trigger the `Deploy GitHub Pages` workflow.

Exception for explicitly requested source-only editorial review: do not build or include generated artifacts until the author is ready. Record the build/export as pending in the PR and keep it focused on source and documentation. This is a review-stage deferral, not permission to publish without an up-to-date export. See [VOICE.md](VOICE.md) for Jonathan's author voice and [AGENTS.md](AGENTS.md) for agent-specific guidance.

After the workflow PR is merged, an admin must confirm repository Settings → Pages uses **GitHub Actions** as its source and verify the first successful Pages workflow run.

## Architecture

- **NextJS** — shared components, layouts, headers/footers
- **Static export** — `docs/` directory serves via GitHub Pages
- **Source code** — lives in `src/` directory
- **Path aliases** — use `@/` for internal imports (e.g., `@/components/base_page`)

## Blog hero images and sharing previews

Every published post uses its frontmatter `image` as both the header image and the Open Graph/Twitter preview. Include `imageAlt`, `imageWidth`, `imageHeight`, and a short, accurate `description`. For new Unsplash photos, also include `imageCredit` (photographer name) and `imageSource` (the original photo page); these produce a visible credit below the header.

Choose a subject appropriate to the article, review the crop, and verify that the photo is free under the [Unsplash License](https://unsplash.com/license), not Unsplash+. Use a stable `https://images.unsplash.com/photo-…` URL, never a random image endpoint or the Unsplash webpage URL as the image. A JPEG crop at 1200 × 630 works for both the hero and social sharing, for example `?fm=jpg&fit=crop&w=1200&h=630&q=85`. Record the actual dimensions when retaining an existing image. Photo-page links in each post retain provenance; the photographs remain their creators' work under Unsplash's license.

Readers see the hero at the top of the article and can follow its credit to Unsplash. Sharing previews are included in the static HTML and require neither JavaScript nor a site account. External image loading must be allowed; preview services choose when to refresh their own caches, so previously shared links may keep an older preview after publication.

Use SPEAR for an image pass: scope the articles, plan the photo choices, update the frontmatter/template, then assess (1) coverage and unchanged article text, (2) photo suitability, crop, alt text and credit, (3) image delivery and crawler-readable metadata, and (4) desktop/mobile rendering and export parity. Resolve with a review PR and screenshots; merging/publishing still requires approval.

Run `make build` and `npm run check:blog-images` before submitting. The check reads every exported article to catch missing heroes, duplicate or stale social tags, and incorrect canonical URLs. Also verify the remote images load and inspect desktop/mobile screenshots; the offline check cannot establish network availability or visual suitability. Commit the resulting `docs/` export with the source so an approved merge publishes the same pages that were reviewed.
