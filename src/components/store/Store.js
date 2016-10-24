import React, { Component } from 'react'
import Filter from './filter/Filter'
import ItemContainer from './itemcontainer/ItemContainer'
import '../../../dist/scss/store.scss'
export default class Store extends Component {
  render() {
    var bg = {
      backgroundImage: 'url(media/images/3.png)'
    }
    return (
      <div className="store-container" style={bg}>
        <div className="transparent container">
          <div className="row">
            <Filter/>
            <ItemContainer/>
          </div>
        </div>
      </div>
    )
  }
}
