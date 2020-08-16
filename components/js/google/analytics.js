import Safe from 'react-safe';


export default function GoogleAnalytics(props) {
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
            <script async src={'https://www.googletagmanager.com/gtag/js?id=' + props.trackingId}></script>
            <Safe.script>{gtagJS}</Safe.script>
        </>
    );
}
