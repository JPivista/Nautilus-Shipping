import {Container,  Row, Col} from 'react-bootstrap';
import CountUp from 'react-countup';
import Image from "next/image";

function CardExample() {

  return (

    <div >
        <Container fluid className="p-0 home-banner" style={{ backgroundImage:`url(/images/home_banner.jpeg)`}}>
      {/* <Image
                src="/images/home_banner.jpeg"
                width="100%"
                height="620"
                background='no-repeat'
                background-size='cover'
                className="banner-img"
                
            /> */}
<Container>
<Row className="m-flex-row pt-5">
<Col className="ban-text">Delivering excellence in
technical and crew management</Col>    
<Col className="icon-desc pt-3">
<Row className="icon-text">
    <Col className="ani-text col-6">
<Image src="/images/ship.png" width="90" height="90" alt="Ships manned" className="svgicon"/>
<CountUp start={50} end={200} suffix={'+'}/>
<p>Ships manned</p>
    </Col>
    <Col className="ani-text col-6">
    <Image src="/images/database.png" width="90" height="90" alt="Seafarer database" className="svgicon" />
    <CountUp start={20000} end={51000} suffix={'+'} separator={','}/>
<p>Seafarer database</p>
    </Col>
    </Row>
<Row className="icon-text">
<Col className="ani-text col-6">
<Image src="/images/crew.png" width="90" height="90" alt="Crew on active rolls" className="svgicon"/>
<CountUp start={500} end={1000} suffix={'+'} separator={','}/>
<p>Crew on active rolls</p>
    </Col>
    <Col className="ani-text col-6">
<Image src="/images/clients.png" width="90" height="90" alt="Clients" className="svgicon"/>
<CountUp start={20} end={50} suffix={'+'}/>
<p>Clients</p>
    </Col>
    </Row>
</Col>
</Row>

</Container>
</Container>
    </div>
  );
}

export default CardExample;