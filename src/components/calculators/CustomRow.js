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

import css from './CustomRow.module.css'

export default function CustomRow() {
  const [inputFocus, setInputFocus] = React.useState(false);
  return (
    <Container id="menu-dropdown">
        <Card className="bg-default" id="calc-row">
            <Row className={css.inputrow}>
                <Col className={css.inputcolumn}>
                    <InputGroup className={css.inputgroup}>
                        <Input placeholder="Graphics Card Name" type="text" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-components" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col className={css.inputcolumn}>
                    <InputGroup className={css.inputgroup}>
                        <Input placeholder="Purchase Price" type="text" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-cart" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col className={css.inputcolumn}>
                    <InputGroup className={css.inputgroup}>
                        <Input placeholder="Hashrate (MH/s)" type="number" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-sound-wave" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col className={css.inputcolumn}>
                    <InputGroup className={css.inputgroup}>
                        <Input placeholder="$/day" type="number" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-coins" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
                <Col className={css.inputcolumn}>
                    <InputGroup className={css.inputgroup}>
                        <Input placeholder="Break Even" type="number" />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <i className="tim-icons icon-time-alarm" />
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        </Card>
    </Container>
  );
}

