import Page from '../../components/base_page';
import { getAllPostIds, getPostData } from '../../components/posts_data';
import Date from '../../components/date';

import css from '../../styles/common.module.scss';

import Head from 'next/head';

export default function Post({ postData }) {
    return (
        <Page>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div>
                    <p>{postData.author}</p>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </div>
        </Page>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
