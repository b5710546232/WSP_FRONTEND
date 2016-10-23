import React, { Component } from 'react'
import {Input} from 'react-materialize'
import '../../../../dist/scss/filter.scss'
export default class Filter extends Component {
  render() {
    return (
      <div className="filter col s12 m2 white  z-depth-2">
        <div className="filter-component">
          <div className="row">
            <Input name='group1' type='checkbox' value='drink' label='Drink' />
          </div>
          <div className="row">
            <Input name='group1' type='checkbox' value='bottle' label='Bottle' />
          </div>
        </div>
      </div>
    )
  }
}
