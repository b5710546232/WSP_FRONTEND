import React, { Component } from 'react'
import {Link} from 'react-router'
import {Footer,Row,Button} from 'react-materialize'
export default class AppFooter extends Component {
  render() {
    return (
      <Footer copyrights="&copy; 2016 Copywrong Powered by Star Burst Stream"

        links={
          <ul>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/' }}>Home</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/store' }}>Store</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/design' }}>Design</Link></li>
          </ul>
        }
        className='page-footer light-blue'
        >
          <h5 className="white-text">Contact us</h5>
          <p>
            Company Here
            Address Here
          </p>
          <Row>
            <Button floating  className='red' waves='light' icon='add' />
            <Button floating  className='red' waves='light' icon='add' />
          </Row>

      </Footer>
    )
  }
}
