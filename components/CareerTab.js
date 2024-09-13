import React, { useState } from "react";
import { Nav, Tab, Container } from "react-bootstrap";
import CareerFormNew from "../utils/CareerFormNew";
import OnshoreCareerForm from "../utils/OnshoreCareerForm";

const TabsComponent = () => {
  // State to manage the active tab
  const [activeKey, setActiveKey] = useState("tab1");

  return (
    <>
      <style>
        {`
          .nav-tabs .nav-link {
            background-color: #ffffff;
            color: #000000; 
             border: none !important; /* Remove borders */
          }

          .nav-tabs .nav-link.active {
            background-color: #008E9C !important; 
            color: #ffffff !important; 
             border: none !important; /* Remove borders */
          }
        `}
      </style>
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        {/* Tab Headers */}
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link className="mx-2 fw-bold rounded-0" eventKey="tab1">
              Offshore/Sea Job
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="mx-2 fw-bold rounded-0" eventKey="tab2">
              Onshore/Shore Job
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Container>
          <Tab.Content>
            <Tab.Pane eventKey="tab1">
              <CareerFormNew />
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">
              <OnshoreCareerForm />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </>
  );
};

export default TabsComponent;
