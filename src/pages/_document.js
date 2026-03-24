import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <script src="https://awesome.bible/manna.js" async />
            </Head>
            <body>
                <a href="#main-content" className="skip-to-content">
                    Skip to content
                </a>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
