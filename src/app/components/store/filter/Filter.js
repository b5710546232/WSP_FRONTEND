import React, { Component } from 'react'
import FilterItem from '../filteritem/FilterItem'
import '../../../../assets/scss/filter.scss'
export default class Filter extends Component {
  render() {
    return (
      <div className="col s12 ">
        <div className="filter white  z-depth-2 ">
          <div className="row ">
              <h5 className="container ">Category</h5>
          </div>
          <div className="container ">
            <div className="filter-component row " >
              <FilterItem name="Bottle" id="1"/>
              <FilterItem name="Drink" id="2"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
