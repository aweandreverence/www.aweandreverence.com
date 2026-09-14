import { Fragment } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { SITE_TITLE, SITE_URL } from '@/config/seo.js';

import Page from '@/components/base_page';
import Date from '@/components/date';

import { getPost, getPostsStaticPaths } from '@/utils/posts';

import css from '@/styles/blog.module.scss';

export default function Post({ post }) {
    const tags = post.tags;
    const headerImage = post.meta.image;
    const imageAlt = post.meta.imageAlt || post.meta.title;
    const description = post.meta.description;
    const canonicalUrl = `${SITE_URL}/blog/${post.meta.seoTitle}-${post.id}/`;

    return (
        <Page>
            <Head>
                <title>
                    {post.meta.title} | Blog | {SITE_TITLE}
                </title>
                <link rel="canonical" href={canonicalUrl} />
                <meta name="description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content={SITE_TITLE} />
                <meta property="og:title" content={post.meta.title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                    name="twitter:card"
                    content={headerImage ? 'summary_large_image' : 'summary'}
                />
                <meta name="twitter:title" content={post.meta.title} />
                <meta name="twitter:description" content={description} />
                {headerImage && (
                    <>
                        <meta property="og:image" content={headerImage} />
                        <meta property="og:image:alt" content={imageAlt} />
                        <meta
                            property="og:image:width"
                            content={post.meta.imageWidth}
                        />
                        <meta
                            property="og:image:height"
                            content={post.meta.imageHeight}
                        />
                        <meta name="twitter:image" content={headerImage} />
                        <meta name="twitter:image:alt" content={imageAlt} />
                    </>
                )}
            </Head>
            <div className={css.post}>
                {headerImage && (
                    <figure className={css.headerImage}>
                        <img
                            src={headerImage}
                            alt={imageAlt}
                            width={post.meta.imageWidth}
                            height={post.meta.imageHeight}
                            fetchPriority="high"
                        />
                        {post.meta.imageSource && post.meta.imageCredit && (
                            <figcaption>
                                Photo by{' '}
                                <a href={post.meta.imageSource}>
                                    {post.meta.imageCredit}
                                </a>{' '}
                                on <a href="https://unsplash.com/">Unsplash</a>
                            </figcaption>
                        )}
                    </figure>
                )}
                <h1>{post.meta.title}</h1>

                <div>
                    <p>
                        by <span>{post.meta.author}</span> -{' '}
                        <Date dateString={post.meta.date} />
                    </p>
                    <div className={css.tags}>
                        Tags:{' '}
                        {tags
                            ? tags.map((tag, index) => (
                                  <Fragment key={tag.id}>
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
                                      {index === tags.length - 1 ? '' : ', '}
                                  </Fragment>
                              ))
                            : 'none'}
                    </div>
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
