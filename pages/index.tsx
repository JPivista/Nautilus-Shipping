import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/HomeBanner'
import ThePs from '../components/The4ps'
import Naut from '../components/Nautilius'
import Servcies from '../components/OurServices'
import Contact from '../components/Contactus'
import Footer from '../components/Footer'
import Robots from '../utils/robots'

export default function Home() {

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": "https://www.nautilusshipping.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nautilusshipping.com/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <title>Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="Delivering excellence in technical and crew management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="Delivering excellence in technical and crew management 1 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 1 + Clients Delivering excellence in technical and crew management Gc, Container, Tankers, Bulk carriers 10 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 10 + Clients Powering ship [&hellip;]" />
        <meta property="og:url" content="https://www.nautilusshipping.com/" />
        <meta property="og:site_name" content="Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

    
<Header/>
<Banner/>
<ThePs/>
<Naut/>
<Servcies/>
<Contact/>
<Footer/>
    </>
  )
}
