import React, { Component } from 'react'
import {Row,Button,Input} from 'react-materialize'
export default class PaymentInfo extends Component {

  componentWillMount(){
    $('.dropdown-button').dropdown();
  }
  render(){
    return (
      <div>
        <Row>
          <a className='dropdown-button btn' href='#' data-activates='dropdown-method'>Select</a>
          <ul id='dropdown-method' className='dropdown-content'>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
          </ul>
          <span>{this.props.select_method? this.props.select_method:<span>Select Payment Method</span>}</span>
        </Row>
        <Row>
          <a className='dropdown-button btn' href='#' data-activates='dropdown-address'>Select</a>
          <ul id='dropdown-address' className='dropdown-content'>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
          </ul>
          <span>{this.props.select_address? this.props.select_address:<span>Select your address</span>}</span>
        </Row>
        <Row>
          <Button waves="light" className="left" onClick={this.props.back}>Back</Button>
          <Button waves="light" className="right">Confirm</Button>
        </Row>
      </div>
    )
  }
}
