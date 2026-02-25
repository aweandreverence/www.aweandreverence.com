'use client';

import Script from 'next/script';

export function GoogleAnalytics({ trackingId }) {
    // Don't render if no tracking ID
    if (!trackingId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${trackingId}');
                `}
            </Script>
        </>
    );
}
