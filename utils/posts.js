import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

// --------------------------------------------------
// Public Utility Functions
// --------------------------------------------------

// Retrieves the full post, including metadata and HTML content
export async function getPost(id) {
    const matterResult = getPostFrontMatter(id);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();
    const post = {
        id,
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
    const seoTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    post.meta.seoTitle = seoTitle;

    return post;
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
