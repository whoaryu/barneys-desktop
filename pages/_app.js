import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Google Analytics */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BLGXQX31SK" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BLGXQX31SK');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
