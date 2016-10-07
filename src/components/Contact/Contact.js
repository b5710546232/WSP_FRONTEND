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
        <div className="container">
          <form className="ContactForm">
            <div class="span2">
            <br/>
            <br/>
            <br/>
              <h2>Namsailaiyen</h2>
            </div>
            <div class="span2">
              <h4>E-mail: namsailaiyen@gmail.com</h4>
            </div>
            <div class="span2">
              <h4>Phone number: (+66)80-000-0000</h4>
            </div>
            <div class="span2">
            <h4>Address</h4>
            </div>
            <div class="span2">
                <h5>999/999 Bangkhen</h5>
                <h5>Bangna Bangkok, Thailand 11150</h5>
            </div>
            <div class="span2">
              <img className="img-responsive center-block" width={800} height={600} src="src/assets/map.jpg"/>
            </div>
          </form>
        </div>
      )
  }
}
