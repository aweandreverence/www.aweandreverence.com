# www.aweandreverence.com

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.aweandreverence.com/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.aweandreverence.com/actions/workflows/deploy-pages.yml)

Static Next.js site for [www.aweandreverence.com](https://www.aweandreverence.com/). Production output is committed in `docs/` for GitHub Pages.

## Blog content

- Published-post source lives in `src/posts/*.md`, with title, date, author, and tags in YAML front matter. The site generates article, blog-index, and tag pages from these files.
- URLs default to a slug derived from the title plus the post ID. When retitling a published post, set optional `slug` front matter to its existing title-derived slug (without the post ID) to preserve shared links. For example, `slug: 'a-righteous-man-falls-seven-times'` keeps that article at `/blog/a-righteous-man-falls-seven-times-f7a2416/` even when its title changes.
- Read [VOICE.md](VOICE.md) when drafting or revising Jonathan Tsai's posts. It records his approved voice characteristics, links to source examples, and includes a concise editorial review rubric. Keep the specific author's brief authoritative.
- Keep editorial documentation outside `src/posts/`: the current post loader treats every entry there as a post. `VOICE.md` is a repository reference, not a public blog entry.
- Follow [CONTRIBUTING.md](CONTRIBUTING.md) for PRs, production-export updates, and visual review screenshots. Authoring guidance does not replace the technical requirements in [AGENTS.md](AGENTS.md).

## Deployment

Merges to `master` trigger the `Deploy GitHub Pages` workflow, which uploads the committed `docs/` directory to GitHub Pages.

After the workflow is merged, confirm repository Settings → Pages is switched to **GitHub Actions** as the source and verify the first workflow run publishes successfully.
