import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'posts');

// --------------------------------------------------
// Public Utility Functions
// --------------------------------------------------

// Retrieves the full post, including metadata and HTML content
export async function getPost(id) {
    const matterResult = getPostFrontMatter(id);

    const processedContent = await remark()
        .use(remarkHtml)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();
    const post = {
        id,
        tags: getPostMetadata(id).tags,
        meta: {
            ...matterResult.data,
        },
        content: {
            html: contentHtml,
        },
    };
    return post;
}

// Retrieves only the metadata for a post
export function getPostMetadata(id) {
    const matterResult = getPostFrontMatter(id);

    const post = {
        id,
        meta: {
            ...matterResult.data,
        },
    };

    const title = post.meta.title;
    const seoTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/ /g, '-');

    post.meta.seoTitle = seoTitle;

    var tags = post.meta.tags;
    if (tags) {
        tags = tags.split(',').map((tag) => tag.trim());
        tags = tags.map((tag) => ({
            content: tag,
            id: tag.replace(/ /g, '-').toLowerCase(),
        }));
    } else {
        tags = null;
    }
    post.tags = tags;
    return post;
}

// Retrieves a sorted list of all unique tags
export function getTags() {
    const posts = getPosts();
    var tags = [];
    posts.forEach((post) => {
        if (post.tags) {
            post.tags.forEach((tag) => {
                if (!tags.find((compare) => compare.id === tag.id)) {
                    tags.push(tag);
                }
            });
        }
    });
    return tags.sort((a, b) => (a.id > b.id ? 1 : -1));
}

// Retrieves the content of a specific tag
export function getTagContent(id) {
    return getTags().find((tag) => tag.id === id).content;
}

// Retrieves all posts sorted into their respective tag(s)
export function getPostsGroupedByTags() {
    const posts = getPosts();
    const tags = getTags();
    var groupedPosts = {};
    tags.forEach((tag) => {
        groupedPosts[tag.id] = [];
    });
    posts.forEach((post) => {
        const postTags = post.tags;
        if (postTags) {
            postTags.forEach((tag) => {
                groupedPosts[tag.id].push(post);
            });
        }
    });
    return groupedPosts;
}

// Retrieves a list of posts sorted by date
export function getPosts() {
    const postIds = getAllPostIds();
    const posts = postIds.map((postId) => {
        const post = getPostMetadata(postId);
        return post;
    });

    const sortedPosts = posts.sort((a, b) => {
        const result = a.meta.date < b.meta.date ? 1 : -1;
        return result;
    });
    return sortedPosts;
}

// Retrieves a list of static paths for all posts
// See: https://github.com/vercel/next.js/blob/master/errors/invalid-getstaticpaths-value.md
export function getPostsStaticPaths() {
    const postIds = getAllPostIds();
    const paths = postIds.map((postId) => {
        const metadata = getPostMetadata(postId);
        const seoTitle = metadata.meta.seoTitle;
        return {
            params: {
                seoTitleAndId: `${seoTitle}-${postId}`,
            },
        };
    });

    const result = {
        paths,
        fallback: false,
    };

    return result;
}

// Retrieves a list of static paths for all tags
export function getTagsStaticPaths() {
    const tags = getTags();
    const paths = tags.map((tag) => {
        return {
            params: {
                tagId: tag.id,
            },
        };
    });

    const result = {
        paths,
        fallback: false,
    };
    return result;
}

// --------------------------------------------------
// Internal Helper Functions
// --------------------------------------------------

// Functions for retrieving information about all posts

function getPostFileNames() {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    return fileNames;
}

function getAllPostIds() {
    const fileNames = getPostFileNames();

    const postIds = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        return id;
    });

    return postIds;
}

// Functions for retrieving information about a single post

function getPostFilePath(id) {
    const filePath = path.join(POSTS_DIRECTORY, `${id}.md`);
    return filePath;
}

function getPostFileContents(id) {
    const filePath = getPostFilePath(id);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
}

function getPostFrontMatter(id) {
    const fileContents = getPostFileContents(id);
    const matterResult = matter(fileContents);

    return matterResult;
}
