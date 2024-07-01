import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import Robots from '../utils/robots'

const approach = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": "https://www.nautilusshipping.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nautilusshipping.com/fleet/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <div>
<Head >
{/* <!-- HTML Meta Tags --> */}
<title>Fleet - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
<meta name="description" content="Minimizing Downtime and Maximizing Revenues for Ship Owners and Operators Operational efficiency and compliance At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance"></meta>
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://www.nautilusshipping.com/fleet" />
{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Fleet - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta itemprop="description" content="Minimizing Downtime and Maximizing Revenues for Ship Owners and Operators Operational efficiency and compliance At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance"></meta>
<meta itemprop="image" content=""></meta>
{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="Fleet - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta property="og:type" content="article"></meta>
<meta property="og:title" content="Fleet - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta property="og:description" content="Minimizing Downtime and Maximizing Revenues for Ship Owners and Operators Operational efficiency and compliance At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance"></meta>
<meta property="og:image" content=""></meta>
{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:title" content="Fleet - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta name="twitter:description" content="Minimizing Downtime and Maximizing Revenues for Ship Owners and Operators Operational efficiency and compliance At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance"></meta>
<meta name="twitter:image" content=""></meta>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
</Head>  
<Header/>
    
    <Image
    src="/images/fleet_banner.jpeg"
    width="800"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    alt="nautilus shipping"
    
  />

<Container className="text-box">
<h1 className="fs-2 heading">Minimizing Downtime and Maximizing Revenues for Ship</h1>
<h2 className="fs-2 heading">Owners and Operators</h2>
<h3 className="fs-2 pt-4">Operational efficiency and compliance</h3>
<p className="fs-6">At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance of periodic inspections and are supported by our marine and technical superintendents’ experience with port state control inspections, flag state, and coast guard inspection authorities.</p>
<p className="fs-6">A strong focus on periodic and proactive maintenance programs ensures that potential damage from or to cargo is minimized and our vessels are always in optimal condition. Our strict adherence to schedule and efficient operations means your vessels have minimal downtime. More importantly, this approach has helped in asset preservation, cost, and operational efficiency, which in turn translates into maximum revenue days.</p>
<Image src="/images/fleet_1.jpeg" className="mt-4 m-width" width="800" height="500" alt="nautilus shipping"/>
<h3 className="fs-2 pt-4 heading">Managing a range of ships with a strong business ethic</h3>
<div className="offer fs-6">We have experience in managing a range of ships including bulk carriers, general cargo vessels, containers, chemical tankers, offshore vessels and barges, dredgers (cutter and hopper suction).</div>
<div className="offer fs-6 mb-4">We manage tankers in adherence to SIRE standards.</div>
<Image src="/images/fleet_2.jpeg" className="mt-4 mb-4 m-width" width="800" height="500" alt="nautilus shipping"/>
<p className="fs-6 mt-4">The dry cargo vessels were managed within the projected annual cost and have delivered savings to the tune of 6% per annum for our clients. The waiver of our management fees when the vessels could not be operable due to unavoidable constraints demonstrates our strong commitment to the owners’ business goals.</p>

<div className="offer fs-6">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>We have demonstrated 24X7 working of dredgers and completion of projects well within the target date set by our clients. This has resulted in further businesses and contracts for owners.</Col>      
</Row>
 </div>
<div className="offer fs-6">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>DSV, PSV, drillships, crew boats, accommodation barges are also among the vessels we cater to.</Col>      
</Row>
</div>
<div className="offer fs-6">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>Drydocking costs of vessels are a key area we address. We help to reduce costs by carrying out all afloat repairs well in advance leaving only the class-related jobs to dock.</Col>      
</Row>
</div>
<div className="offer fs-6">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>The offshore industry has been quite volatile in the past years, and therefore, timing is key. We understand that quick mobilization and demobilization of crew play an important part in the operations of the offshore vessels and our clients will confirm our ability to demonstrate mobility and speed.</Col>      
</Row>
</div>
<p className="fs-4 mt-4 mb-4">Write to us at <Link href="mailto:hello@nautilusshipping.com" className="m-link">hello@nautilusshipping.com</Link> and we will get back to you​.</p>

</Container>


<Footer/>
    </div>
  )
}

export default approach