import Link from 'next/link';

import Page from '../../components/base_page';
import { getTags } from '../../utils/posts';

import css from '../../styles/common.module.scss';

export default function Tags({ tags }) {
    return (
        <Page>
            <h1 className={css.title}>Tags</h1>
            
            <br />
            
            <div className={css.card}>
                <ul>
                    {tags.map((tag) => (
                        <li key={`tag-${tag.id}`}>
                            <Link
                                href={{
                                    pathname: '/tags/[tag]',
                                    query: {
                                        tag: `${tag.id}`,
                                    },
                                }}
                            >
                                <a>{tag.content}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Page>
    );
}

export async function getStaticProps() {
    const tags = getTags();
    return {
        props: {
            tags,
        },
    };
}

