import Page from '../components/base_page';

import css from '../styles/common.module.less';


export default function About() {
    return (
<Page>
    <h1 className={css.title}>
        About Awe and Reverence
    </h1>

    <div className={css.grid}>
        <i>Because Your <b>lovingkindness is better</b> than life, My lips will praise You.</i> - Psalm 63:3
    </div>
</Page>
    );
}
