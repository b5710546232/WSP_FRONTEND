// ui/components/Register/RegisterForm.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Contact.scss'

export default class ContactForm extends Component {
  constructor(props){
    super(props);
  };
  render() {
      return(
        <div className="text-center">
          <form className="ContactForm">
          <div>
            <div style={{width: 100}}>
              <label htmlFor="">Namsailaiyen</label>
            </div>
          </div>
          <br/>
          <div>
            <div style={{width: 100}}>
              <label htmlFor="">E-mail: namsailaiyen@gmail.com</label>
            </div>
          </div>
          <br/>
          <div>
            <div style={{width: 100}}>
              <label htmlFor="">Phone number: (+66)80-000-0000</label>
            </div>
          </div>
          <br/>
          <div>
            <div style={{width: 100}}>
              <label htmlFor="">Address</label>
            </div>
            <br/>
            <div style={{width: 100}}>
              <label htmlFor="">999/999 Bangkhen</label>
            </div>
            <br/>
            <div style={{width: 100}}>
              <label htmlFor="">Bangna Bangkok, Thailand 11150</label>
            </div>
          </div>
          <br/>
          </form>
        </div>
      )
  }
}
