import Page from '../../components/base_page';
import Date from '../../components/date';

import { getPostsStaticPaths, getPost } from '../../utils/posts';

import css from '../../styles/blog.module.scss';

import Head from 'next/head';

export default function Post({ post }) {
    return (
        <Page>
            <Head>
                <title>{post.meta.title} | Blog | Awe & Reverence</title>
            </Head>
            <div className={css.post}>
                <h1>{post.meta.title}</h1>

                <div>
                    <p>
                        by <span>{post.meta.author}</span> -{' '}
                        <Date dateString={post.meta.date} />
                    </p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
            </div>
        </Page>
    );
}

export async function getStaticPaths() {
    const staticPaths = getPostsStaticPaths();
    return staticPaths;
}

export async function getStaticProps({ params }) {
    const postId = params.id;
    const post = await getPost(postId);

    return {
        props: {
            post,
        },
    };
}
