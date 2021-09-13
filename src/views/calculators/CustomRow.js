import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Card,
  Nav,
} from "reactstrap";

export default function CustomRow() {
  const [inputFocus, setInputFocus] = React.useState(false);
  return (
    <Container id="menu-dropdown">
        <Card className="bg-default" id="calc-row">
            <Row>
                <Col lg="4" sm="6">
                    <InputGroup>
                        <Input placeholder="Graphics Card Name" type="text" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col lg="3" sm="6">
                    <InputGroup>
                        <Input placeholder="Purchase Price" type="text" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col lg="4" sm="6">
                    <InputGroup>
                        <Input placeholder="Hashrate (MH/s)" type="number" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        </Card>
    </Container>
  );
}