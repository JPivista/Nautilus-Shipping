import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Card, Button, Col, Row, Container,Image, Spinner} from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from "next/head";
import { fetchWordPressData } from '../utils/fetchData';
import { RotatingLines } from 'react-loader-spinner'
import PostList from '../utils/PostList';
//import Image from 'next/image';
import Robots from '../utils/robots'

const SuccessStories = () => {
  const router = useRouter();
  const { categorySlug } = router.query;

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": "https://www.nautilusshipping.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nautilusshipping.com/news-insights/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <title>News and Insights from the Shipping Industry - Nautilus</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/news-insights" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="News and Insights from the Shipping Industry - Nautilus" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/news-insights" />
        <meta property="og:site_name" content="News and Insights from the Shipping Industry - Nautilus" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
      </Head>
    <div className="wbg-grey">
      <Header />

      
      <Image
        src="/images/insights_banner.jpeg"
        width="500"
        height="420"
        background='no-repeat'
        background-size='cover'
        className="banner-img"
        
      />
      <Container >
        <p className="fs-1 bogle-medium walmart-default" >News & Insights</p>
      </Container>
      <PostList categorySlug={68} />
 
      <Footer />


      </div>
      </>
  );
};

export default SuccessStories;