import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import Robots from '../utils/robots'

const sitemap = () => {
    return (
        <>
             <Head>
        <title>Sitemap - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
        <meta name="description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://www.nautilusshipping.com/sitemap" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sitemap - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="og:description" content="We provide Maritime solutions which include Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys Commercial Vessel Management" />
        <meta property="og:url" content="https://www.nautilusshipping.com/sitemap" />
        <meta property="og:site_name" content="Sitemap - Ship Management Company, Vessel Management Services | Nautilus Shipping" />
        <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
        <meta property="og:image" content="/images/team_banner.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
            <Header />
            <Container fluid>
            <>
                                <Container className="footer-bg d-flex justify-content-center align-items-center" style={{ height: 120 }} fluid>
                                    <h2 className="text-white">Sitemap</h2>
                                </Container>
                    <Container className="mt-5">
                        <ul class="sitemap">
                            <Link href="/fleet"><li>Fleet</li></Link>
                            <Link href="/thank-you"><li>Thank you</li></Link>
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/ship-agency-logistics"><li>Ship Agency & Logistics</li></Link>
                            <Link href="/inspection"><li>Inspection</li></Link>
                            <Link href="/commercial-services"><li>Commercial Services</li></Link>
                            <Link href="/disclaimer"><li>Disclaimer</li></Link>
                            <Link href="/careers"><li>Current Job Openings</li></Link>
                            <Link href="/our-approach"><li>Our Approach</li></Link>
                            
                            <Link href="/contact-us"><li>Contact</li></Link>
                            <Link href="/privacy-statement"><li>Privacy Statement</li></Link>
                            <Link href="/team"><li>Team</li></Link>
                            <Link href="/crew-management"><li>Crew Management</li></Link>
                            <Link href="/ship-management"><li>Ship Management</li></Link>
                            <Link href="/company"><li>Company</li></Link>
                            <Link href="/news-insights"><li>News & Insights</li></Link>
                                    </ul>

                                </Container>
                            </>
            </Container>

            <Footer />
        </>
    )
}

export default sitemap

