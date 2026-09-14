# Repository support files

- `workflows/`: GitHub Pages deployment of the committed `docs/` export after an approved merge.
- `CODEOWNERS`: review routing.
- `pr-images/`: generated visual review evidence; see its README for provenance and reproduction.
- `check-blog-images.cjs`: offline verification of every exported blog article's hero, canonical URL, Open Graph tags, and Twitter card. Run `npm run check:blog-images` after `make build`; it needs the repository's installed `gray-matter` dependency and fails on missing, duplicate, or stale metadata. No network or credentials are used.

These are public repository maintenance files, maintained with the site source. Image reachability and visual crops must also be reviewed in a browser before publication.
