import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contactus'
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
      "target": "https://www.nautilusshipping.com/inspection/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <Head>
        <title>Inspection - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/inspection" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inspection - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/inspection" />
        <meta property="og:site_name" content="Inspection - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header />

      <Image
        src="/images/Inspection_banner.jpeg"
        width="800"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img"
        alt="nautilus shipping"

      />

      <Container className="text-box">
        <h1 className="mb-4 mt-5 heading-1">Inspection</h1>
        <p className="fs-6 mt-4">Our expertise and focus on providing end-to-end solutions saw us launch an Inspections and Surveys practice in early 2014. The services offered under this include Fire Damage, Marine (Hull & Cargo), Engineering, Containers, Bunker and, other related Surveys.</p>

        <h1 className="mb-4 mt-5 heading-1">Pre-Purchase inspection</h1>
        <div className="offer fs-5">
          <Row>
            <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" /></Col>
            <Col>Pre-shipment inspection of engineering & manufactured goods, agro products, mineral & ores for volume, weight, and quality as per specifications including supervision of carting, loading, and securing</Col>
          </Row>
        </div>
        <div className="offer fs-5 mt-4">
          <Row>
            <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" /></Col>
            <Col>Cargo outturn - Supervision of discharge and delivery of cargo including Claim Control Services</Col>
          </Row>
        </div>
        <div className="offer fs-5 mt-4">
          <Row>
            <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" /></Col>
            <Col>Marine Casualties and Cargo damages/losses – General Average</Col>
          </Row>
        </div>
        <div className="offer fs-5 mt-4">
          <Row>
            <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" /></Col>
            <Col>On/Off Hire Survey, Draft Surveys, Break-bulk, Stowage & Securing of Cargo</Col>
          </Row>
        </div>
        <div className="offer fs-5 mt-4">
          <Row>
            <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50" /></Col>
            <Col>Supervision of Loading/Discharge of Project Cargoes</Col>
          </Row>
        </div>




      </Container>
      <Container className="wbg-dark" fluid>
        <Container className=" text-box">
          <h1 className="heading-1 pt-5 ">Our Ship Management services</h1>
          <Row className="pt-5 pb-5">
            <Col xs={6} sm={3} className="mt-45 d-flex flex-column justify-content-end">
              <h3 className="m-heading fs-5">Inspection</h3>
              <Link href="/inspection" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping" /></Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} className="mt-45 ">
              <h3 className="m-heading fs-5">Ship Agency &<br />Logistics</h3>
              <Link href="/ship-agency-logistics" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping" /></Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} className="mt-45 ">
              <h3 className="m-heading fs-5">Crew<br />Management</h3>
              <Link href="/crew-management" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping" /></Button>
              </Link>
            </Col>

            <Col xs={6} sm={3} className="mt-45">
              <h3 className="m-heading fs-5">Ship<br />Management</h3>
              <Link href="/ship-management" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping" /></Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Contact />
      <Footer />
    </>
  )
}

export default approach