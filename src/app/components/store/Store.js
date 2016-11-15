import React, { Component } from 'react'
import Filter from './filter/Filter'
import Search from '../search/Search'
import ItemContainer from './itemcontainer/ItemContainer'
import '../../../assets/scss/store.scss'
export default class Store extends Component {
  render() {
    var bg = {
      backgroundImage: 'url(src/assets/media/images/1.jpg)',
      minHeight:"600px"
    }
    return (
      <div className="store-container" style={bg}>
        <div className="transparent container center">
          <div className="row">
            <Search />
            <Filter />
            <ItemContainer />
          </div>
        </div>
      </div>
    )
  }
}
