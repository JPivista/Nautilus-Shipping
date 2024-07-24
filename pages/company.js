import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'
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
      "target": "https://www.nautilusshipping.com/company/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <Head>
        <title>Maritime Services and Solutions | Nautilus Shipping Company India</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/company" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maritime Services and Solutions | Nautilus Shipping Company India" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/company" />
        <meta property="og:site_name" content="Maritime Services and Solutions | Nautilus Shipping Company India" />
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
        src="/images/company_banner.jpeg"
        width="800"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img"
        alt="nautilus shipping"

      />
      <Container className="text-box">
        <Container className="grad-color">
          <h1 className="mb-4 fs-5 text-white">Profile</h1>
          <p className="fs-6 mt-4 text-white">Nautilus Shipping is a fast-growing provider of maritime solutions. We have over 17 years of experience and six strategically located offices. We strive to deliver excellence across Ship Management, Crewing, Ship Broking, Vessel Inspections, Surveys and, Commercial Vessel Management services.</p>

        </Container>
        <h1 className="mb-4 mt-5 fs-5">Specifically, we offer:</h1>
        <p className="fs-6 mt-4">Our experienced team, along with a carefully cultivated network of agencies, suppliers, and solution providers puts us in a strong position to deliver ship management services seamlessly.</p>
        <p className="fs-6 mt-4">We are guided by our philosophy of keeping the business goals of our clients at the forefront of everything we do. You can read more about this in our 4Ps approach here.</p>
        <Link href="/contact-us" className="btn c_btn fs-6">Get in touch with the seafaring experts today</Link>

        <h2 className="mt-5 fs-5">We are a registered Recruitment & Placement agency authorized by the Director-General of Shipping, India.</h2>
        <p className="heading-1 fs-6">Our license No. is RPSL-CHN-012, valid till December 29, 2026 and we operate in compliance with Maritime Labour Convention 2006 certified by IRS Class. Nautilus is also an ISO 9001:2008 company, certified by IRQS.</p>

      </Container>
      <Container className="wbg-dark" fluid>
        <Container className=" text-box">
          <h1 className="heading-1 pt-5 ">Our Ship Management services</h1>
          <Row className="pt-5 pb-5">
            <Col xs={6} sm={3} className="mt-45">
              <h3 className="m-heading fs-5">Commercial Services</h3>
              <Link href="/commercial-services" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="nautilus shipping" /></Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} className="mt-45">
              <h3 className="m-heading fs-5">Crew Management</h3>
              <Link href="/crew-management" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="nautilus shipping" /></Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} >
              <h3 className="m-heading fs-5">Ship Agency & Logistics</h3>
              <Link href="/ship-agency-logistics" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="nautilus shipping" /></Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} className="mt-45 mt-30">
              <h3 className="m-heading fs-5">Inspection</h3>
              <Link href="/inspection" >
                <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="nautilus shipping" /></Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default approach