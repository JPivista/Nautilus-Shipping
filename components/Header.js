
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'next/image';

function NavScrollExample() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isShownMenu1, setIsShownMenu1] = useState(false);
  const [isShownMenu2, setIsShownMenu2] = useState(false);
  const handleClickMenu1 = event => {
    // 👇️ toggle shown state
    setIsShownMenu1(current => !current);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClickMenu2 = event => {
    // 👇️ toggle shown state
    setIsShownMenu2(current => !current);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  
  return (
    <>
    <Navbar  expand="lg" className="wbg-main" >
      <Container>
        <Link href="/"><Image src="/images/logo.svg" className="logo" width="100" height="80" alt="nautilus shipping"/></Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/our-approach" className="nav-link ">Our Approach</Link>
            <NavDropdown title="Services" id="navbarScrollingDropdowns">
              <NavDropdown.Item ><Link href="/ship-management" className="menu">Ship Management</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link href="/crew-management" className="menu">Crew Management</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item><Link href="/ship-agency-logistics" className="menu">Ship Agency & Logistics</Link></NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item><Link href="/inspection" className="menu">Inspection</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <Link href="/commercial-services" className="menu">Commercial Services</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Link href="/fleet" className="nav-link">Fleet</Link>
            <Link href="/careers" className="nav-link">Careers</Link>
            <Link href="/news-insights" className="nav-link">News & Insights</Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link href="/company" className="menu">Company</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link href="/team" className="menu">Team</Link></NavDropdown.Item>
            </NavDropdown>
            
            <Link href="/contact-us" className="nav-link">Contact</Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <Offcanvas show={show} onHide={handleClose} className="wbg-main">
   <Offcanvas.Header closeButton>
     <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
   </Offcanvas.Header>
   <Offcanvas.Body>
          <ListGroup>
            <Link href="/our-approach">
              <ListGroup.Item>
            Our Approach
              </ListGroup.Item>
            </Link>
            <ListGroup.Item  onClick={handleClickMenu1}>Services <i className="fa fa-angle-down"></i></ListGroup.Item>
            {isShownMenu1 && (
              <div>
                <Link href="/ship-management">
                  <ListGroup.Item>Ship Management</ListGroup.Item>
                </Link>
                <Link href="/crew-management">
                  <ListGroup.Item>Crew Management</ListGroup.Item></Link>
                  <Link href="/ship-agency-logistics/">
                <ListGroup.Item>Ship Agency & Logistics</ListGroup.Item></Link>
                <Link href="/inspection/"><ListGroup.Item>Inspection</ListGroup.Item></Link>
                <Link href="/commercial-services/"><ListGroup.Item>Commercial Services</ListGroup.Item></Link>
                </div>
              )}
            <Link href="/fleet/"><ListGroup.Item>Fleet</ListGroup.Item></Link>
            <Link href="/careers/"><ListGroup.Item>Careers</ListGroup.Item></Link>
            <Link href="/news-insights/"><ListGroup.Item>News & Insights</ListGroup.Item></Link>
            <ListGroup.Item onClick={handleClickMenu2}>About Us <i className="fa fa-angle-down"></i></ListGroup.Item>
            {isShownMenu2 && (
              <div>
                <Link href="/company/"><ListGroup.Item>Company</ListGroup.Item></Link>
                <Link href="/team/"><ListGroup.Item>Team</ListGroup.Item></Link>
              </div>
            )}
            <Link href="/contact-us"><ListGroup.Item>Contact</ListGroup.Item></Link>

    </ListGroup>
   </Offcanvas.Body>
 </Offcanvas>
</>
  );
}

export default NavScrollExample;