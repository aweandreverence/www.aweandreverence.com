import Head from 'next/head';
import Link from 'next/link';

import Page from '../../components/base_page';
import { SITE_TITLE } from '../../constants/seo.js';
import {
    getTagsStaticPaths,
    getTagContent,
    getPostsGroupedByTags,
} from '../../utils/posts';

import css from '../../styles/blog.module.scss';

import Date from '../../components/date';

export default function Tag({ tagId, tagContent, posts }) {
    return (
        <Page>
            <Head>
                <title>
                    Tag: {tagContent} | Tags | {SITE_TITLE}
                </title>
            </Head>
            <div className={css.post}>
                <h1>Tag: {tagContent}</h1>
                <ul>
                    {posts[tagId].map((post) => (
                        <li key={`post-${post.id}`}>
                            <Link
                                href={{
                                    pathname: '/blog/[seoTitleAndId]',
                                    query: {
                                        seoTitleAndId: `${post.meta.seoTitle}-${post.id}`,
                                    },
                                }}
                            >
                                {post.meta.title}
                            </Link>
                            <br />
                            <small>
                                <span>{post.meta.author}</span>
                                <span> - </span>
                                <Date dateString={post.meta.date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </div>
        </Page>
    );
}
export async function getStaticPaths() {
    const staticPaths = getTagsStaticPaths();
    return staticPaths;
}

export async function getStaticProps({ params }) {
    const tagId = params.tagId;
    const tagContent = getTagContent(tagId);
    const posts = getPostsGroupedByTags();
    return {
        props: {
            tagId,
            tagContent,
            posts,
        },
    };
}
