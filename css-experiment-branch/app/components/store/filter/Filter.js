import React, { Component } from 'react'
import FilterItem from '../filteritem/FilterItem'
import '../../../../dist/scss/filter.scss'
export default class Filter extends Component {
  render() {
    return (
      <div className="filter col s12 m2 white  z-depth-2">
        <div className="filter-component">
          <FilterItem name="Bottle" id="1"/>
          <FilterItem name="Drink" id="2"/>
        </div>
      </div>
    )
  }
}
