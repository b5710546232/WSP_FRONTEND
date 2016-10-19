import React, { Component } from 'react'
import {Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  FieldGroup,
  Col,Row} from 'react-bootstrap'
import './Design.scss'

export default class Design extends Component {

  render() {
    return (
      <div>
        <br/><br/><br/><br/>
        <span className='design-title'> Design your own bottle</span>

        <div className = 'row'>
          <div className = 'col-md-6'> Picture </div>
          <div className = 'col-md-6'>

            <Form horizontal>

            <span className = 'design-text'>Name</span>
            <FormGroup>
            <Col sm={1}></Col>
            <Col>
              <div className="input-group">
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
              </div>
            </Col>
            </FormGroup>

            <span className = 'design-text'>Size</span>
            <FormGroup>
            <Col sm={1}></Col>
            <Col>
              <div className="input-group">
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
              </div>
            </Col>
            </FormGroup>

            <span className = 'design-text'>Banner</span>
            <FormGroup>
            <Col sm={1}></Col>
            <Col>
              <div className="input-group">
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
              </div>
            </Col>
            </FormGroup>

            <span className = 'design-text'>Logo</span>
            <FormGroup>
            <Col sm={1}></Col>
            <Col>
              <div className="input-group">
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
              </div>
            </Col>
            </FormGroup>

            <span className = 'design-text'>or</span>
            <FormGroup>
            <Col sm={1}></Col>
            <Col>
              <div className="input-group">
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
              </div>
            </Col>
            </FormGroup>


            </Form>
          </div>
        </div>

      </div>
    )
  }
}
