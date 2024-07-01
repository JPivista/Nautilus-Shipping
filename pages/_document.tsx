import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>   
     {/* LinkedIn Insight Tag tracking code */}
     <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "6046612";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);

            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=6046612&fmt=gif" />
        </noscript>
        {/* End of LinkedIn Insight Tag tracking code */}
      </Head>
      <body>
     
        <Main />
        <NextScript />
       
      </body>
    </Html>
  )
}
