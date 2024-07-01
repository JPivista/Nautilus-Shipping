import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contactus';
import Image from 'next/image';
import Head from 'next/head';
import Robots from '../utils/robots'


const approach = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": "https://www.nautilusshipping.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nautilusshipping.com/commercial-services/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
       <Head>
        <title>Commercial Services - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/commercial-services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Services - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/commercial-services" />
        <meta property="og:site_name" content="Commercial Services - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
<Header/>
    
    <Image
    src="/images/commercial_services_banner.jpeg"
    width="800"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    alt="nautilus shipping"
    
  />
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Commercial Services and Ship Broking</h1>
<p className="fs-6 mt-4">This covers a comprehensive commercial management service that comprises strategy and employee management for vessels. This includes negotiation and providing services for charter party contracts, full post-fixture support, and account tracking. We have the skills and resources to help clients define, measure, and successfully manage their shipping journey through skillful commercial management of their vessels. Specifically, we offer:</p>

<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Advice on chartering strategies</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>
Sourcing best employment opportunity for a vessel</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Negotiating charter party contracts</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"alt="nautilus shipping"/></Col>
 <Col>Instructing the vessel Master in respect of the charter party terms</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Appointment and liaison with port agents</Col>      
</Row>
</div>

<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Vessel monitoring to ensure adherence to charter party terms</Col>      
</Row>
</div>

<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Post-fixture and account tracking functions</Col>      
</Row>
</div>

<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>
Demurrage and Dispatch calculations</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Voyage reporting and analysis</Col>      
</Row>
</div>
<div className="offer fs-6 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" alt="nautilus shipping"/></Col>
 <Col>Supply of marine fuels, evaluating and nominating bunker suppliers, handling invoices and payments</Col>      
</Row>
</div>



</Container>
<Container className="wbg-dark" fluid>
<Container className=" text-box">
<h1 className="heading-1 pt-5 ">Our Ship Management services</h1>
<Row className="pt-5 pb-5">
<Col xs={6} sm={3} className="mt-45 mt-46">
<h3  className="m-heading fs-5">Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>
<Col xs={6} sm={3} className="mt-45 ">
<h3 className="m-heading fs-5">Ship Agency &<br/>Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>
<Col xs={6} sm={3} className="mt-45 ">
<h3 className="m-heading fs-5">Crew<br/>Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50"className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col> 
            
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading fs-5">Ship<br/>Management</h3>
<Link href="/ship-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>    
</Row>
</Container>
</Container>
      <Contact/>
<Footer/>
    </>
  )
}

export default approach