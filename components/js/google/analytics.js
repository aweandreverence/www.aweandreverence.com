import Safe from 'react-safe';

import Head from 'next/head';

function GoogleAnalytics(props) {
    const gtagJS = `
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', '${props.trackingId}');
`;

    return (
        <>
            <Head>
                <script
                    async
                    src={
                        'https://www.googletagmanager.com/gtag/js?id=' +
                        props.trackingId
                    }
                    key="google-analytics"
                ></script>
                <Safe.script>{gtagJS}</Safe.script>
            </Head>
        </>
    );
}

export default GoogleAnalytics;
