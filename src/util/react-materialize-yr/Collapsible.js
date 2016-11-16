import React, { Component } from 'react'

export default class Collapsible extends Component {
  componentDidMount(){
    $('#'+this.props.id).collapsible();
  }
  render(){
    return (
      <ul id={this.props.id} className={"collapsible "+this.props.option} data-collapsible="accordion">
        {this.props.children}
      </ul>
    )
  }
}
