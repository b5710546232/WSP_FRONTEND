import React, { Component } from 'react'
import '../../../dist/scss/home.scss'
import { Link } from 'react-router'
export default class Home extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="container center white-text">
            <row>
              <br/>
              <br/>
              <div className="col s12">
                <img src="media/images/logo.png"></img>
              </div>
              <div className="col s12">
                <h1>Nature Drink</h1>
              </div>
              <div className="col s12">
                <h5>It's not the noob water, but "It's water from the heaven!"</h5>
              </div>
              <div className="col s12">
                <Link className="waves-effect waves-light btn-large" to={{ pathname:'/Store' }}>Visit Store</Link>
              </div>
            </row>
          </div>
          <div className="parallax">
            <img src="media/images/1.jpg"/>
          </div>
        </div>
        <div className="section white center z-depth-2  ">
            <div className="container row">
              <div className="col s12 left">
                <h2>Why you have to buy Nature Drink?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 center">
                <div>
                  <h3>Good1</h3>
                  <p className="light">Something 1</p>
                </div>
              </div>
              <div className="col s12 m4 center">
                <div>
                  <h3>Good2</h3>
                  <p className="light">Something 2</p>
                </div>
              </div>
              <div className="col s12 m4 center">
                <div>
                  <h3>Good3</h3>
                  <p className="light">Something 3</p>
                </div>
              </div>
            </div>
        </div>
        <div className="parallax-container parallax-design">
          <div className="container white-text">
            <div className="row">
              <div className="col s4">
                <h2>Explose your imagination design your own bottle!</h2>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src="media/images/2.png"></img>
          </div>
        </div>
      </div>
    )
  }
}
