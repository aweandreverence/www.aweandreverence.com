import Link from 'next/link';

import Page from '../../components/base_page';
import { getPosts } from '../../utils/posts';

import css from '../../styles/common.module.scss';

import Date from '../../components/date';

export default function Blog({ posts }) {
    return (
        <Page>
            <h1 className={css.title}>Blog</h1>

            <br />

            <img
                src="https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80"
                className={css.image}
            />

            <div className={css.card}>
                <ul>
                    {posts.map((post) => (
                        <li key={`post-${post.id}`}>
                            <Link
                                href={{
                                    pathname: '/blog/[seoTitleAndId]',
                                    query: {
                                        seoTitleAndId: `${post.meta.seoTitle}-${post.id}`,
                                    },
                                }}
                            >
                                <a>{post.meta.title}</a>
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

export async function getStaticProps() {
    const posts = getPosts();
    return {
        props: {
            posts,
        },
    };
}
