import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import ContactForm from '../utils/ContactForm'


function AutoLayoutExample() {

    return (
<Container fluid>
<Row className="m-row">
<Col style={{ backgroundImage: `url(/images/contact_us_banner.jpeg)` }} className="h-contact d-flex flex-column justify-content-center">
<h1 className="text-white fs-1 pt-4">Contact us</h1>
<p className="text-white">Contact us for Ship Management, Crew Management, Ship Agency & Logistics, Inspection and Commercial Ship Services. Simply fill the form and we will get in touch as soon as possible.</p>
<p className="text-white fs-2 r_phone"><Link href="tel:+914446849999">
<i className="fa fa-phone"/> +91 44 4684 9999</Link></p>
<hr className="r_line"/>
<p className="text-white fs-2 r_email"><Link href="mailto:hello@nautilushipping.com">
<i class="fa fa-envelope-o" aria-hidden="true"/> hello@nautilushipping.com</Link></p>
<hr className="r_line"/>
                </Col>
<Col className="wbg-main pt-5">
<Container className="pt-4">
<p className="text-white">Note: Job Seekers, please visit our <Link href={'/careers'} style={{textDecoration:'underline', color:'#fff'}}>career job listing page</Link></p>
<ContactForm/>
</Container >
                   
</Col>
</Row>
</Container>
    );
}

export default AutoLayoutExample;