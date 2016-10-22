import React, { Component } from 'react'
import Filter from './filter/Filter'
import Item from './item/Item'
export default class Store extends Component {
  render() {
    return (
      <div>
        <Filter/>
        <Item/>
      </div>
    )
  }
}
