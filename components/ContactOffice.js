import Link from 'next/link';
import React from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const ContactOffice = () => {
  return (
    <Container className="wbg-main" fluid>
      <Container className="mt-4 pt-4 pb-4 ">
        <h1 className="text-white">Our Offices</h1>

        <Row>
          <Col lg={4} sm={12} className="pt-4">
            <Card>
              <Card.Header className="c-head">Chennai</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  Maalavika Centre, 144,<br />Kodambakkam High Road, Nungambakkam,<br />Chennai-600 034
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles">

                  <i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  {/* <p className='merriweather mb-0' >
                    <Link href="tel:+91 44 4684 9999" target='_blank' className='text-decoration-none text-white' style={{ fontSize: '20px !important' }}>
                      +91 44 4684 9999
                    </Link>
                  </p> */}
                  <p className='merriweather mb-0 ' style={{ fontSize: '20px' }}>
                    <Link href="tel:+914446849999" target='_blank' className='text-decoration-none text-white'>
                      +91 44 4684 9999
                    </Link>
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="pt-4">
            <Card>
              <Card.Header className="c-head">Bangalore</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  Reliaable Phoenix Towers,<br />
                  4th Floor, 16 & 16/1, <br />Museum Road, <br />Bengaluru – 560025
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  <p className='merriweather mb-0 ' style={{ fontSize: '20px' }}>
                    <Link href="tel:+91 80 4196 6600" target='_blank' className='text-decoration-none text-white'>
                      +91 80 4196 6600
                    </Link>
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="pt-4">
            <Card>
              <Card.Header className="c-head">Dubai</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  400-16, <br /> Arabian Square Business Center, <br />
                  Fahidi Heights, Al Hamriya, <br />
                  Dubai, UAE
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles">
                  <i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  <p className='merriweather mb-0' style={{ fontSize: '20px' }}>
                    <Link href="tel:+971 4 2569259" target='_blank' className='text-decoration-none text-white'>
                      +971 4 2569259
                    </Link>
                  </p></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className="pt-4">
            <Card>
              <Card.Header className="c-head">Mumbai</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18" height={200}>
                  607, Signature Business Park,<br />Postal Colony Road, Chembur,<br />Mumbai-400 071
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  <p className='merriweather mb-0' style={{ fontSize: '20px' }}>
                    <Link href="tel:+91 22 2550 8970" target='_blank' className='text-decoration-none text-white'>
                      +91 22 2550 8970
                    </Link></p></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="pt-4">
            <Card>
              <Card.Header className="c-head">Port Blair</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  4th Cross Road,<br />
                  Near Confidential Dental Clinic, Junglighat, Port Blair,<br />
                  South Andaman – 744103
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  <p className='merriweather mb-0' style={{ fontSize: '20px' }}>
                    <Link href="tel:+91 99 3208 8859" target='_blank' className='text-decoration-none text-white'>
                      +91 99 3208 8859
                    </Link>
                  </p></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="pt-4">
            <Card>
              <Card.Header className="c-head">Singapore</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  101, Cecil Street,<br />
                  #23-06, Tong Eng Building,<br />
                  Singapore-069533
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles">
                  <i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i>
                  <p className='merriweather mb-0' style={{ fontSize: '20px' }}>
                    <Link href="tel:+65 6224 6151" target='_blank' className='text-decoration-none text-white'>
                      +65 6224 6151
                    </Link>
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="mt-4 pb-4">
          <Col sm={12} lg={4} className="pt-4">
            <Card>
              <Card.Header className="c-head">Kochi</Card.Header>
              <Card.Body className="office text-white">
                <Card.Text className="txt-18">
                  1st Floor, House no-260,<br />
                  15th Cross Road,
                  Giri Nagar,<br />Cochin – 682020
                </Card.Text>
                <hr />
                <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pe-2" style={{ fontSize: '30px !important' }}></i> <p className='merriweather mb-0' style={{ fontSize: '20px !important' }}>+91 484 4042325</p></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

      </Container>

    </Container>
  )
}

export default ContactOffice