import React from "react";
import classnames from "classnames";
import Custom from "views/calculators/custom.js";

// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Calculator() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <Card>
            <CardHeader>
            <Nav className="nav-tabs-info" role="tablist" tabs>
                <NavItem>
                <NavLink
                    className={classnames({
                    active: iconTabs === 1,
                    })}
                    onClick={(e) => setIconsTabs(1)}
                    href="#pablo"
                >
                    <i className="tim-icons icon-spaceship" />
                    Custom Prices
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({
                    active: iconTabs === 2,
                    })}
                    onClick={(e) => setIconsTabs(2)}
                    href="#pablo"
                >
                    <i className="fab fa-github" /> 
                    &nbsp; Retail Prices
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({
                    active: iconTabs === 3,
                    })}
                    onClick={(e) => setIconsTabs(3)}
                    href="#pablo"
                >
                    <i className="tim-icons icon-bag-16" />
                    Advanced Calculator
                </NavLink>
                </NavItem>
            </Nav>
            </CardHeader>
            <CardBody>
            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                <TabPane tabId="link1">
                <p>
                    <Custom />
                </p>
                </TabPane>
                <TabPane tabId="link2">
                <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service
                    for state of the art customer service.
                </p>
                </TabPane>
                <TabPane tabId="link3">
                <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables
                    for real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                </p>
                </TabPane>
            </TabContent>
            </CardBody>
        </Card>
      </Container>
      
    </div>
  );
}