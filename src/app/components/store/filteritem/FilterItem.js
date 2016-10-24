import React, { Component } from 'react'
import {Input} from 'react-materialize'
import '../../../../assets/scss/filter.scss'
export default class FilterItem extends Component {
  render() {
    return (
        <Input name='category' type='checkbox' value={this.props.id} label={this.props.name} />
    )
  }
}
