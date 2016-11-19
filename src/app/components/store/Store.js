import React, { Component } from 'react'
import Sidebar from './sidebar/sidebar.js'
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
          <br/>
          <div className="row left">
            <Sidebar/>
          </div>
          <br/>
          <div className="row">
            <ItemContainer />
          </div>
        </div>
      </div>
    )
  }
}
