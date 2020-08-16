import Head from 'next/head';

import CommonCSS from '../components/css/common';
import Header from '../components/header';
import Footer from '../components/footer';
import NonBlockingJS from '../components/js/nonblocking';

import css from '../styles/common.module.scss';
import utilsCss from '../styles/utils.module.scss';


export default function Page({children}) {
    return (
<div className={css.container}>
    <Head>
        <title>Awe and Reverence</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="icon" href="/favicon.ico" />
        <CommonCSS />
    </Head>
    <Header />
    <main className={css.main}>
        {children}
    </main>
    <Footer />
    <NonBlockingJS />
</div>
    );
}
