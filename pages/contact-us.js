import { useState} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Office from '../components/ContactOffice';
import configData from "config.json";
import Head from 'next/head';
import ContactForm from '../utils/ContactForm'
import Robots from '../utils/robots'
import Link from 'next/link';


function ContainerExample() {

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": "https://www.nautilusshipping.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nautilusshipping.com/contact-us/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
      <>
      <Head>
        <title>Contact - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="Delivering excellence in technical and crew management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/contact-us" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="Delivering excellence in technical and crew management 1 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 1 + Clients Delivering excellence in technical and crew management Gc, Container, Tankers, Bulk carriers 10 + Ships manned 100 + Seafarer database 100 + Crew on active rolls 10 + Clients Powering ship [&hellip;]" />
        <meta property="og:url" content="https://www.nautilusshipping.com/contact-us" />
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
    
      <Image
      src="/images/contact_banner.jpeg"
      width="800"
      height="620"
      background='no-repeat'
      background-size= 'cover'
              className="banner-img"
              alt="nautlus Shipping"
      
    />
    <Container>
        <Container>
    <Row>
        <Col >
        <p className="fs-1 bogle-bold walmart-default mt-4">Contact Us</p>
        <p>Contact us for Ship Management, Ship Agency & Logistics, Inspection and Commercial Ship Services.
<br/>Simply fill the form and we will get in touch with you soon.</p>
<p>Note: Job Seekers, please visit our <Link href={'/careers'}>career job listing page</Link>.</p>
        </Col>
      </Row> 

      <Row className="m-row">
        <Col className="text-center">
       <Image src="/images/contact_img.jpeg" width="700" height="620" className="m-width" alt="nautilus shipping"/>
        </Col>
<Col className="text-center">
<ContactForm/>                          
      
</Col>
      </Row> 
      </Container>
    </Container>
<Office/>
<Container className="g-0" fluid >
<iframe src="https://www.google.com/maps/d/embed?mid=1IBRS53rdQ_0XFaEjZIsta38g6BXSkMc&ehbc=2E312F" width="100%" height="480"></iframe>
</Container>
    <Footer/>




    </>
  );
}

export default ContainerExample;