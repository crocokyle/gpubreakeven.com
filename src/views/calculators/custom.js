import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
import CustomRow from "views/calculators/CustomRow.js";

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
} from "reactstrap";

export default function Custom() {
  const [inputFocus, setInputFocus] = React.useState(false);
  return (
    <div className="section section-basic" id="basic-elements">
        <Row>
            <Col>
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
                <CustomRow />
            </Col>
        </Row>
    </div> 
    
  );
}