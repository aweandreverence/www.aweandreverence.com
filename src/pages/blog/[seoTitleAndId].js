import Head from 'next/head';
import Link from 'next/link';

import { SITE_TITLE } from '@/config/seo.js';

import Page from '@/components/base_page';
import Date from '@/components/date';

import { getPost, getPostsStaticPaths } from '@/utils/posts';

import css from '@/styles/blog.module.scss';

export default function Post({ post }) {
    const tags = post.tags;
    const headerImage = post.meta.image;

    return (
        <Page>
            <Head>
                <title>
                    {post.meta.title} | Blog | {SITE_TITLE}
                </title>
                {headerImage && (
                    <meta property="og:image" content={headerImage} />
                )}
            </Head>
            <div className={css.post}>
                {headerImage && (
                    <div className={css.headerImage}>
                        <img
                            src={headerImage}
                            alt={post.meta.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '1.5rem',
                            }}
                        />
                    </div>
                )}
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
