import React, { Component } from 'react'
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
