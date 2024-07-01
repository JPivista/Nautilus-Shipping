import {Container, Row, Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import ScrollToTop from "react-scroll-to-top";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Chat from '../components/VerLoop'


function AutoLayoutExample() {
  const router = useRouter();
  return (
    <Container className="footer-bg footer" fluid>
      <Chat/>
      <ScrollToTop smooth />
      <FloatingWhatsApp phoneNumber="+919176849999" accountName="Nautilus Shipping Pvt Ltd" statusMessage="Typically replies within 1 hour" chatMessage="Hello there! How can we help?" avatar="/images/fav-icon.png"/>
      <Row className="m-row">
        <Col>
        <h2 className="footer-text">About</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/our-approach" className={router.pathname == "/our-approach" ? "active" : ""}>Our Approach</Link></li>
                                <li className="f-text"><Link href="/careers" className={router.pathname == "/careers" ? "active" : ""}>Careers</Link></li>
                                <li className="f-text"><Link href="/news-insights" className={router.pathname == "/news-insights" ? "active" : ""}>News & Insights</Link></li>
                                <li className="f-text"><Link href="/company" className={router.pathname == "/company" ? "active" : ""}>Company</Link></li>
                                <li className="f-text"><Link href="/team" className={router.pathname == "/team" ? "active" : ""}>Team</Link></li>
                                <li className="f-text"><Link href="/contact-us" className={router.pathname == "/contact-us" ? "active" : ""}>Contact</Link></li>
                            </ul>
  
        </Col>
        <Col>
        <h2 className="footer-text">Services</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/ship-management/" className={router.pathname == "/ship-management" ? "active" : ""}>Ship Management</Link></li>
                                <li className="f-text"><Link href="/crew-management/" className={router.pathname == "/crew-management" ? "active" : ""}>Crew Management</Link></li>
                                {/* <li className="f-text"><Link href="/ship-agency-logistics" className={router.pathname == "/ship-agency-logistics" ? "active" : ""}>Ship Agency & Logistics</Link></li> */}
                                <li className="f-text"><Link href="/inspection" className={router.pathname == "/inspection" ? "active" : ""}>Inspection</Link></li>
                                <li className="f-text"><Link href="/commercial-services" className={router.pathname == "/commercial-services" ? "active" : ""}>Commercial Services</Link></li>
                                
                            </ul>   
        </Col>
        <Col>
        <h2 className="footer-text">Fleet</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/fleet" className={router.pathname == "/fleet" ? "active" : ""}>Fleet</Link></li>
                            </ul>  
        
        </Col>
        <Col>
        <h2 className="footer-text">Contact</h2>
        <hr className="footer-div"/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text">Email us :</li>
                                <li className="f-text"><Link href="mailto:hello@nautilusshipping.com">hello@nautilusshipping.com</Link></li>
                                <li className="f-text">Call us</li>
                                <li className="f-text"><Link href="tel:+914446849999">+ 91 44 4684 9999</Link></li>
                                
                            </ul> 
                            <Container>
        <ul className="list-unstyled d-flex ">
        <li className="f-text px-2"><Link href="https://www.facebook.com/NautilusShippingIndia/" target="_blank"><Image src="/images/facebook.png" width="40" height="40" alt="facebook" style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://in.linkedin.com/company/nautilusshipping" target="_blank"><Image src="/images/linkedin.png" width="40" height="40" alt="linkedin"  style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://www.instagram.com/nautilusshipping/?hl=en" target="_blank"><Image src="/images/instagram.png" width="40" height="40" alt="instagram"  style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://www.youtube.com/channel/UC5V1kVUx3Cg9WjI3PotjX1g" target="_blank"><Image src="/images/youtube.png" width="40" height="40" alt="youtube"  style={{height:40}}/></Link></li>
        </ul>
      </Container>
        </Col>
      </Row>
      <hr/>
      <Container>
        <ul className="list-unstyled d-flex justify-content-center">
        <li className="f-text px-3"><Link href="/sitemap" className={router.pathname == "/sitemap" ? "active" : ""}>Sitemap</Link></li>
        <li className="f-text px-3"><Link href="/privacy-statement" className={router.pathname == "/privacy-statement" ? "active" : ""}>Privacy Statement</Link></li>
        <li className="f-text"><Link href="/disclaimer" className={router.pathname == "/disclaimer" ? "active" : ""}>Disclaimer</Link></li>
        </ul>
      </Container>
    </Container>
  );
}

export default AutoLayoutExample;