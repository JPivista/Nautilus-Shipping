import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import configData from "../config.json";
import Head from 'next/head';
import Robots from '../utils/robots'

const privacy = ({ data }) => {

    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "nautilusshipping",
        "url": "https://www.nautilusshipping.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.nautilusshipping.com/disclaimer/{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    return (
        <>
        <Head>
        <title>Disclaimer - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta name="robots" content="index,follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disclaimer - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/" />
        <meta property="og:site_name" content="Disclaimer - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
            <Header />
            <Container fluid>
                {
                    data.map((post, index) => {
                        //console.log(post)
                        return (
                            <>
                                <Container className="footer-bg d-flex justify-content-center align-items-center" style={{ height: 120 }} fluid>
                                    <h2 className="text-white">{post['title']['rendered']}</h2>
                                </Container>
                                <Container>
                                    <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} className="fs-4" />

                                </Container>
                            </>
                        )


                    })}
            </Container>

            <Footer />
        </>
    )
}

export default privacy


export async function getServerSideProps(context) {
    //const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}pages?_embed&slug=disclaimer`);
    const data = await res.json();
    return { props: { data } }

}