import React, { Component } from 'react'

export default class Collapsible extends Component {
  render(){
    return (
      <li>
        <div className="collapsible-header">{this.props.header}</div>
        <div className="collapsible-body">{this.props.children}</div>
      </li>
    )
  }
}
