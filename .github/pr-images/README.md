# PR review images

Screenshots of this site's locally rendered pages, attached to pull requests so reviewers can inspect desktop and mobile presentation before merging.

- `righteous-man-desktop.png` and `righteous-man-mobile.png`: full-page captures of the “A Righteous Man Falls Seven Times—and Rises Again” article at 1440 × 1100 and 390 × 844 viewport sizes.
- `blog-heading-spacing-{mobile,desktop}-{before,after}.png`: viewport comparisons of section-heading spacing at 390 × 844 and 1440 × 1100, captured from the committed export before and after the shared blog CSS fix. To reproduce, build and serve `docs/`, open the article below, and scroll the first section heading to roughly 350 px from the viewport top.
- `blog-hero-{f7a2416,a5f7686,c8eab38}-{desktop,mobile}.png`: viewport captures of the new summit-cross, human-eye, and vineyard heroes, showing credits and article headings at 1440 × 1100 and 390 × 844. Rebuild and open the matching article routes to recapture.
- Earlier images document the logo, header, and mobile-layout changes named in their filenames.

These are generated review artifacts from Awe & Reverence's own site. The `blog-hero-*` screenshots include Unsplash photography: Yannick Pulver (f7a2416), Grégoire Hervé-Bazin (a5f7686), and Adele Payman (c8eab38), used under the [Unsplash License](https://unsplash.com/license); original photo-page links are recorded in the matching `src/posts/<id>.md` frontmatter. Site branding belongs to Awe & Reverence; Scripture displayed in the article retains the NASB/Lockman notice visible on the page.

To recapture the article, run `make build`, serve `docs/` locally, and take full-page browser screenshots of `/blog/a-righteous-man-falls-seven-times-and-rises-again-f7a2416/` at the viewport sizes above. Do not capture private browser state or credentials. Source: `src/posts/f7a2416.md` and the existing blog template.

## Navigation and footer refresh

`navigation-letspray-desktop.png`, `navigation-letspray-mobile.png`, and
`navigation-resources-footer.png` show the reordered primary navigation and
footer resource links. Captured with headless Chromium/Playwright from the
`make build` static export at desktop (1440px) and mobile (390px) widths;
the mobile menu is expanded. To refresh, serve `docs/` locally, open the home
page at those widths, expand the mobile menu, and capture the header/footer.
These are public-safe review screenshots of A&R's own site, not deployment assets;
third-party imagery retains its original attribution and rights.
