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
                <h5>&nbsp;&nbsp;&nbsp;999/999 Bangkhen</h5>
                <h5>&nbsp;&nbsp;&nbsp;Bangna Bangkok, Thailand 11150</h5>

            </div>
              <br/>
            <table class="table table-hover">
            <tbody>
            <tr>
            <td>
              <a href="https://www.facebook.com/Gameonlinechan/">
                <img class="feature-icon"width={60} height={60} src="src/assets/F_icon.svg.png" alt="facebook"/>
                <h5>facebook</h5>
              </a>
            </td>
            <td>
              <a>
              <img class="feature-icon"width={60} height={60} src="src/assets/Line.png" alt="Line"/>
              <h5>Line</h5>
              </a>
              </td>
              <td>
                <a>
                <img class="feature-icon"width={60} height={60} src="src/assets/Instagram.png" alt="Instagram"/>
                <h5>Instagram</h5>
                </a>
                </td>
              <td>
                <a href="http://localhost:9999/">
                  <img class="feature-icon"width={60} height={60} src="src/assets/home-icon.jpg" alt="main page"/>
                  <h5>Web</h5>
                </a>
            </td>
            </tr>
          </tbody>
          </table>
          &nbsp;
            <div class="span2">
              <img className="img-responsive center-block" width={800} height={600} src="src/assets/map.jpg"/>
              &nbsp;
            </div>
          </form>
        </div>
      )
  }
}
