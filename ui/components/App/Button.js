import React, { Component } from 'react'
// import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
export default class  Button extends Component {
  render() {
    return (
    <div>
      <button className="btn btn-info" type="button">
        <span className="glyphicon glyphicon-refresh"></span>
      </button>
    </div>
    )
  }
}
