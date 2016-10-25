import React, { Component } from 'react'
import {Row,Button,Input} from 'react-materialize'
export default class PaymentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {select_address:null,select_method:null};
  }
  componentDidMount(){
    $('#address-info-dropdown.dropdown-button').dropdown();
    $('#payment-dropdown.dropdown-button').dropdown();
  }
  render(){
    return (
      <div>
        <Row>
          <a id="payment-dropdown" className='dropdown-button btn' href='#' data-activates='dropdown-method'>Select</a>
          <ul id='dropdown-method' className='dropdown-content'>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
          </ul>
          <span>{this.state.select_method? this.state.select_method:<span>Select Payment Method</span>}</span>
        </Row>
        <Row>
          <a id="address-info-dropdown" className='dropdown-button btn' href='#' data-activates='dropdown-address'>Select</a>
          <ul id='dropdown-address' className='dropdown-content'>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
          </ul>
          <span>{this.state.select_address? this.state.select_address:<span>Select your address</span>}</span>
        </Row>
        <Row>
          <Button waves="light" className="left" onClick={this.props.back}>Back</Button>
          <Button waves="light" className="right">Confirm</Button>
        </Row>
      </div>
    )
  }
}
