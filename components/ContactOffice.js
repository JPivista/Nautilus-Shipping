import React from 'react'
import {Container, Row, Col,Card,Image, Button} from 'react-bootstrap';

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
        Maalavika Centre, 144,<br/>Kodambakkam High Road, Nungambakkam,<br/>Chennai-600 034
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pr-4"></i>   +91 44 4684 9999</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col lg={4} sm={12} className="pt-4">
<Card>
<Card.Header className="c-head">Mumbai</Card.Header>
      <Card.Body className="office text-white">
        <Card.Text className="txt-18" height={200}>
        607, Signature Business Park,<br/>Postal Colony Road, Chembur,<br/>Mumbai-400 071
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pr-4"></i> +91 22 2550 8970</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} className="pt-4">
<Card>
<Card.Header className="c-head">Port Blair</Card.Header>
      <Card.Body className="office text-white">
        <Card.Text className="txt-18">
        4th Cross Road,<br/>
Near Confidential Dental Clinic, Junglighat, Port Blair,<br/>
South Andaman – 744103
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pr-4"></i> +91 99320 88859</Card.Title>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row className="mt-4 pb-4">
<Col sm={12} lg={4} className="pt-4">
<Card>
<Card.Header className="c-head">Kochi</Card.Header>
      <Card.Body className="office text-white">
        <Card.Text className="txt-18">
        1st Floor, House no-260,<br/>
15th Cross Road,
Giri Nagar,<br/>Cochin – 682020
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pr-4"></i> +91 484 4042325</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} className="pt-4">
<Card>
<Card.Header className="c-head">Bangalore</Card.Header>
      <Card.Body className="office text-white">
        <Card.Text className="txt-18">
        Reliaable Phoenix Towers,<br/>
4th Floor, 16 & 16/1, <br/>Museum Road, <br/>Bengaluru – 560025
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone d-flex align-items-center card-titles"><i className="fa fa-phone pr-4"></i> +91 80 41966600</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} lg={4} className="pt-4">
<Card>
<Card.Header className="c-head">Singapore</Card.Header>
      <Card.Body className="office text-white">
        <Card.Text className="txt-18">
        101, Cecil Street,<br/>
#23-06, Tong Eng Building,<br/>
Singapore-069533
        </Card.Text>
        <hr/>
        <Card.Title className="off-phone card-titles" ></Card.Title>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>

    </Container>
  )
}

export default ContactOffice