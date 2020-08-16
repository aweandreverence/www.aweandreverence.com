import Page from '../components/base_page';

import css from '../styles/common.module.scss';


export default function Home() {
    return (
        <Page>
            <h1 className={css.title}>
                Awe and Reverence
            </h1>

            <div className={css.grid}>
                <i>Because Your <b>lovingkindness is better</b> than life, My lips will praise You.</i> - Psalm 63:3
            </div>
        </Page>
    );
}
