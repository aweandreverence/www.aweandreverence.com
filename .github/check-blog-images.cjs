// Verify the exported HTML that link-preview crawlers receive, without JavaScript.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');

function decode(value) {
    const entities = {
        '&amp;': '&',
        '&quot;': '"',
        '&#x27;': "'",
        '&#39;': "'",
        '&lt;': '<',
        '&gt;': '>',
    };
    const decoded = value.replace(
        /&(amp|quot|#x27|#39|lt|gt);/g,
        (entity) => entities[entity]
    );
    return decoded;
}

function attributes(tag) {
    const entries = [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
        match[1],
        decode(match[2]),
    ]);
    const result = Object.fromEntries(entries);
    return result;
}

const files = fs
    .readdirSync('src/posts')
    .filter((file) => file.endsWith('.md'));
assert(files.length > 0, 'No posts found');
for (const file of files) {
    const { data } = matter(
        fs.readFileSync(path.join('src/posts', file), 'utf8')
    );
    const id = path.basename(file, '.md');
    const slug = (data.slug || data.title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/ /g, '-');
    const route = `/blog/${slug}-${id}/`;
    assert(
        data.image && data.imageAlt && data.description,
        `${file}: image, alt text, and description required`
    );
    assert.equal(new URL(data.image).protocol, 'https:');
    assert(
        data.imageWidth > 0 && data.imageHeight > 0,
        `${file}: image dimensions required`
    );
    const html = fs.readFileSync(
        path.join('docs', route, 'index.html'),
        'utf8'
    );
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
    const tags = [...head.matchAll(/<meta\b[^>]*>/g)].map((match) =>
        attributes(match[0])
    );
    const expected = {
        description: data.description,
        'og:type': 'article',
        'og:site_name': 'Awe & Reverence',
        'og:title': data.title,
        'og:description': data.description,
        'og:url': `https://www.aweandreverence.com${route}`,
        'og:image': data.image,
        'og:image:alt': data.imageAlt,
        'og:image:width': String(data.imageWidth),
        'og:image:height': String(data.imageHeight),
        'twitter:card': 'summary_large_image',
        'twitter:title': data.title,
        'twitter:description': data.description,
        'twitter:image': data.image,
        'twitter:image:alt': data.imageAlt,
    };
    for (const [key, value] of Object.entries(expected)) {
        const matching = tags.filter(
            (tag) => (tag.property || tag.name) === key
        );
        assert.equal(
            matching.length,
            1,
            `${file}: exactly one ${key} required`
        );
        assert.equal(matching[0].content, value, `${file}: incorrect ${key}`);
    }
    const canonical = [...head.matchAll(/<link\b[^>]*>/g)]
        .map((match) => attributes(match[0]))
        .filter((tag) => tag.rel === 'canonical');
    assert.equal(
        canonical.length,
        1,
        `${file}: exactly one canonical required`
    );
    assert.equal(canonical[0].href, expected['og:url']);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) =>
        attributes(match[0])
    );
    const hero = images.find((img) => img.src === data.image);
    assert(hero, `${file}: hero missing from article`);
    assert.equal(hero.alt, data.imageAlt);
    assert.equal(hero.width, String(data.imageWidth));
    assert.equal(hero.height, String(data.imageHeight));
    if (data.imageSource) {
        assert(
            data.imageCredit,
            `${file}: source requires photographer credit`
        );
        assert.equal(new URL(data.imageSource).hostname, 'unsplash.com');
        assert(
            html.includes(`href="${data.imageSource}"`),
            `${file}: photo credit link missing`
        );
    }
    console.log(`PASS ${route}`);
}
console.log(
    `Verified hero images and social metadata for all ${files.length} exported posts.`
);
