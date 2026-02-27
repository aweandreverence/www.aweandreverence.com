import Head from 'next/head';
import Link from 'next/link';

import { SITE_TITLE } from '@/config/seo.js';

import Page from '@/components/base_page';
import Date from '@/components/date';

import { getPost, getPostsStaticPaths } from '@/utils/posts';

import css from '@/styles/blog.module.scss';

export default function Post({ post }) {
    const tags = post.tags;
    return (
        <Page>
            <Head>
                <title>
                    {post.meta.title} | Blog | {SITE_TITLE}
                </title>
            </Head>
            <div className={css.post}>
                <h1>{post.meta.title}</h1>

                <div>
                    <p>
                        by <span>{post.meta.author}</span> -{' '}
                        <Date dateString={post.meta.date} />
                        <br />
                        <div>
                            Tags:{' '}
                            {tags
                                ? tags.map((tag, index) => (
                                      <>
                                          <Link
                                              href={{
                                                  pathname: '/tags/[tag]',
                                                  query: {
                                                      tag: tag.id,
                                                  },
                                              }}
                                          >
                                              {tag.content}
                                          </Link>
                                          {index === tags.length - 1
                                              ? ''
                                              : ', '}
                                      </>
                                  ))
                                : 'none'}
                        </div>
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
    const seoTitleAndId = params.seoTitleAndId;
    const parts = seoTitleAndId.split('-');
    const postId = parts[parts.length - 1];

    const post = await getPost(postId);

    return {
        props: {
            post,
        },
    };
}
