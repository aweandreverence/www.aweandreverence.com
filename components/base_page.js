import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';
import CommonCSS from '../components/css/common';
import CommonJS from '../components/js/common';
import NonBlockingJS from '../components/js/nonblocking';
import Contact from '../components/contact';

import css from '../styles/common.module.scss';
import utilsCss from '../styles/utils.module.scss';

export default function Page({ children }) {
    return (
        <div className={css.container}>
            <Head>
                <title>Awe and Reverence</title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                    crossOrigin="anonymous"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommonCSS />
            <CommonJS />
            <Header />
            <main className={css.main}>
                {children}
                <Contact />
            </main>
            <Footer />
            <NonBlockingJS />
        </div>
    );
}
