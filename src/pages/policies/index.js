import Link from 'next/link';

import Page from '@/components/base_page';

import css from '@/styles/common.module.scss';

export default function Policies() {
    return (
        <Page>
            <h1 className={css.title}>Policies</h1>

            <br />

            <div className={css.textleft}>
                <ul>
                    <li>
                        <Link href="/policies/tos">Terms of Service</Link>
                    </li>
                    <li>
                        <Link href="/policies/privacy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </Page>
    );
}
