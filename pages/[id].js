import Header from '/components/Header';
import Footer from '/components/Footer';
import Router from 'next/router';
import Head from 'next/head'
import {Col,Container, Row, Image, Button} from 'react-bootstrap';
import configData from "config.json";
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Robots from '../utils/robots'

const post = ({ data }) => {

  // console.log(data);
  return (

<div>
  
<Header/>   
<div className='grid grid-cols-3 gap-5 w-full'>
{
data.map((post)=>{
  //console.log(post)
  const dateToFormat = post['date'];
  const postSlug = post['slug'];
  const fullURL = `https://www.nautilusshipping.com/${postSlug}`;
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "nautilusshipping",
    "url": `https://www.nautilusshipping.com/`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `https://www.nautilusshipping.com/${postSlug}/{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
};


return (
  
  <>
   <Head key={post.id}>
{/* <!-- HTML Meta Tags --> */} 
<title>{post['acf']['meta_title']}</title>
      <meta name="description" content={post['acf']['meta_descriptions']}></meta>
      <meta name="robots" content="index,follow"></meta>
    
        <link rel="icon" href="/images/favicon.ico" />
      <link rel="canonical" href={fullURL} />
{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content={post['acf']['meta_title']}></meta>
<meta itemprop="description" content={post['acf']['meta_descriptions']}></meta>
<meta itemprop="image" content={post['_embedded']['wp:featuredmedia'][0]['source_url']}></meta>
{/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={fullURL}></meta>
<meta property="og:type" content="article"></meta>
<meta property="og:title" content={post['acf']['meta_title']}></meta>
<meta property="og:description" content={post['acf']['meta_descriptions']}></meta>
<meta property="og:image" content={post['_embedded']['wp:featuredmedia'][0]['source_url']}></meta>
{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:title" content={post['acf']['meta_title']}></meta>
<meta name="twitter:description" content={post['acf']['meta_descriptions']}></meta>
      <meta name="twitter:image" content={post['_embedded']['wp:featuredmedia'][0]['source_url']}></meta>
      <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
</Head>  

<Container fluid  className="post-banner" style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
      <Row >
      
        <Col className="mt-3"><Button className="back-btn" onClick={() => Router.back()}>
        <FontAwesomeIcon
        icon={faAnglesLeft}
      />
          Back</Button></Col>
         
</Row >      
<Row className="d-flex flex-column banner-s pt-3">
      <Col>
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="dateicon"
      /> - 
      <Moment
        format="D MMM YYYY"
        withTitle
        className="fs-4"
      >{dateToFormat}</Moment>
</Col> 
<Col><h1 className="fs-2 " dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/></Col>    
</Row>

</Container>
<Container className="pt-4">

</Container>
    
<Container className="mx-auto post-text fs-6">    
<div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}/>
</Container>  
    
             
<Footer/>
</>
)

})}

</div>
</div>
  )
}

export default post

export async function getServerSideProps(context){
    const {id} = context.params;
    const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
  
   
    }