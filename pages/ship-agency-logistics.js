import React from 'react'
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contactus'
import Image from 'next/image';
import Head from 'next/head';
import Robots from '../utils/robots'

const approach = () => {
  return (
    <>
      <Head>
        <title>Ship Agency & Logistics - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ship Agency & Logistics - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/" />
        <meta property="og:site_name" content="Ship Agency & Logistics - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

      <Image
        src="/images/ship_agency_banner.jpeg"
        width="800"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img"

      />
      <Container className="text-box">
        <h1 className="mb-4 mt-5 heading">Ship Agency & Logistics</h1>
        <p className="fs-4 mt-4">We deliver a range of port agency, marine, and logistics services through a robust partner network. From pre-arrival to post-departure, our operational personnel pay close attention to accurate and speedy communication in handling overall disbursement control. We leverage our experience to ensure that vessels enter and exit ports quickly with all port services taken care of in an efficient manner.</p>
        <p className="fs-4">We understand the importance of a qualified crew that is at the forefront of all activities and is the key to a vessel’s safe and smooth day-to-day operation. In addition, safeguarding the vessel’s and the owner’s interests requires highly efficient utilization of crew. Through our own crewing offices in Chennai, Goa, Mumbai and, Kochi, we maintain one of India’s largest pools of qualified, motivated and, dedicated seafarers that fulfill these needs efficiently.</p>
        <p className="fs-4">We offer crew supply services for all types of vessels. By using modern search and selection methods we ensure that our employees not only have the required professional qualifications but also have the right outlook and personality required for the job. Our crew management services include recruitment, selection, training, and management of officers and cadets and rating them for suitability and deployment for different vessels.</p>
        <Row>
          <Col sm={6}><Image src="/images/ship-agency.jpeg" className="m-width" width="700" height="400" /></Col>
        </Row>
        <p className="fs-4 mt-3">We maintain a state-of-the-art database management system and crewing module that has been developed using advanced information technology systems. This ready repository helps in sourcing relevant crew to match the requirements of different ships.</p>
        <p className="fs-4">Our crew survey and statistics show the difference we make in the lives of our crew besides the owners.  Nautilus shipping has one of the highest crew happiness and work satisfaction figures because we are able to provide back to back contracts and career development opportunities. In the long run, this enables us to maintain good continuity on ships and high retention rates. </p>
        <h1 className="heading mt-5 mb-4">Services:</h1>
        <Row>
          <Col xs={12} sm={6}>
            <ul>
              <li className="fs-4 hr mt-3">Crew handling</li>
              <li className="fs-4 hr mt-3">Cash delivery</li>
              <li className="fs-4 hr mt-3">Maintenance and supplies</li>
              <li className="fs-4 hr mt-3">Port and off-port limits services</li>
            </ul>
          </Col>
          <Col xs={12} sm={6}>
            <ul>
              <li className="fs-4 hr mt-3">Vessel husbandry</li>
              <li className="fs-4 hr mt-3">Bunker supervision</li>
              <li className="fs-4 hr mt-3">Owners’ Protective Agency (OPA) services</li>
              <li className="fs-4 hr mt-3">Hub agency services for Asian ports</li>
            </ul>
          </Col>
        </Row>

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