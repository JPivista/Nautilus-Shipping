import React from 'react'
import {Container, Row, Col,Card, Accordion} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      "target": "https://www.nautilusshipping.com/our-approach/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <Head>
        <title>Our Approach - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/our-approach" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Approach - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/our-approach" />
        <meta property="og:site_name" content="Our Approach - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
      </Head>
<Header/>
<Container>
<Image src="/images/the_4Ps_Banner.jpeg" className="m-width" width="1200" height="700" alt="nautilus shipping"/>
</Container>
<Container className="text-box">
<h1 className="fs-3">Our Approach</h1>
<p className="fs-6">Nautilus shipping works on the premise that their clients are always looking for an edge and differentiation that will eventually help them to deliver added value to their end customers. Shipowners will succeed when their customers are happy and ship managers like us can succeed when our clients see business value. It is the classic circle of virtue.</p>
<p className="fs-5">Towards this, our approach to ship management is done through the prism of what we call the 4Ps :</p>


<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Performance-based remuneration</Accordion.Header>
        <Accordion.Body className="a-tab-text">
        Here’s our biggest promise and one that is grounded in performance. Our confidence in ship management allows us to work on a guaranteed performance-focused model. It means you get to deduct from our remuneration if we default on the mutually agreed availability rate of your asset.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Profit-making for ship owners</Accordion.Header>
        <Accordion.Body className="a-tab-text">
<p>Our goal is to help ship owners maximize profits.</p>
<p>This is driven by our philosophy of ROI which is not just about returns, but also about the willingness to cut back on pricing when our ship owners encounter rough weather. One way we do this is by deploying our flexible pricing model that adapts to dynamic market conditions. For example, when ships are forced to be laid up due to the pandemic, ship owners incur delays and losses; our profitability focus for owners means we will work with reduced pricing for the overall ship management in such situations.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Problem-solving with agility to minimize delays and losses</Accordion.Header>
        <Accordion.Body className="a-tab-text">
         <p>When a ship sets sail, the expectation is to have a problem-free and smooth voyage to its destination. However, unforeseen circumstances can result in problems on board or at a port. And it doesn’t always mean a problem of the magnitude of the Suez Canal blockage. It could be an overflowing purifier or a cargo pump seal leak or a turbo charger blade root failure; quickly making available a very specific type of crane required to lift a container; a sick seafarer on board, or a problem related to documentation and customs clearance. That’s where Nautilus demonstrates remarkable agility in addressing and resolving an unforeseen problem so that your ship doesn’t encounter delays and losses.</p>
         <p>Our strength lies in being prepared and in anticipating the problem. Towards this, we have built a strong network of associates across multiple geographies that can help attend and solve ship-related issues – both technical and people.</p>
         <p>As a shipowner, you can be reassured that Nautilus will approach your ship management with a two-pronged strategy:</p>
         <ul>
          <li>Plan & prepare to prevent problems</li>
          <li>Be fully ready to respond to unforeseen problems to minimize delays and losses</li>
         </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <Accordion.Header >Port state control – Minimum non serious deficiencies and zero detentions</Accordion.Header>
        <Accordion.Body className="a-tab-text">
        Our approach to problem-solving also means that we take thorough ship inspection seriously for compliance, safety, equipment condition, documentation, people health, fitness, cargo handling, and overall emergency preparedness. This has resulted in minimum non-serious deficiencies identified and zero detentions of the ships that we have managed, by port state control.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</Container>
<Container className="wbg-grey a-center mt-4 p-4" fluid>
<div className="fs-4 a-box">Our 4Ps are rooted in a pragmatic, practical, and performance-focused approach.</div>
<Container className="p-0 text-box">
<p className="fs-6">If you would like to explore how our 4Ps can reduce costs, maximise profits, and deliver greater value for your company,</p>
<p className="fs-6">Please write to: narayan.r@nautilusshipping.com</p>
<p className="fs-6">or call: <span>+ 91 44 4684 9999</span></p>
</Container>
</Container>

<Footer/>
    </>
  )
}

export default approach