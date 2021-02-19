import Page from '../components/base_page';
import { getSortedPostsData } from '../components/posts_data';

import css from '../styles/common.module.scss';

import Link from 'next/link';
import Date from '../components/date';

export default function Blog({ allPostsData }) {
    return (
        <Page>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id} `}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Page>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
