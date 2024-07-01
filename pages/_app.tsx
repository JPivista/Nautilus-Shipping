import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from 'next/app'
import Script from 'next/script';
import Head from 'next/head';
import Robots from '../utils/robots'
import Image from 'next/image'


function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
      <Head>
        {/* Other head elements */}
        <meta name="google-site-verification" content="ximcwDn5nLvnNzaFd5RFKg4kZIsdRpd2fZ5waaTkXZw" />
      </Head>
      
      {/* Google Tag Manager */}
      <Script id="google-tag-manager-start">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MC9BP82');
        `}
      </Script>
      {/* End Google Tag Manager */}


      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-N3V27DPYSK`}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-N3V27DPYSK');
        `}
      </Script>

       {/* Google Tag Manager (noscript) */}
       <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MC9BP82"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    
      
      
   


      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
