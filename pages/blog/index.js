import Link from 'next/link';
import Row from 'react-bootstrap/Row';

import Page from '../../components/base_page';
import { getPosts } from '../../utils/posts';

import css from '../../styles/common.module.scss';

import Date from '../../components/date';

export default function Blog({ posts }) {
    return (
        <Page>
            <h1 className={css.title}>Blog</h1>

            <br />

            <Row>
                <ul>
                    {posts.map((post) => (
                        <li key={`post-${post.id}`}>
                            <Link href="/blog/[id]" as={`/blog/${post.id}`}>
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
            </Row>
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
