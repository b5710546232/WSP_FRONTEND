import React, { Component } from 'react'
import Filter from './filter/Filter'
import ItemContainer from './itemcontainer/ItemContainer'
import '../../../dist/scss/store.scss'
export default class Store extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
  render() {
    var bg = {
      backgroundImage: 'url(media/images/3.png)'
    }
    var invis = {
      visibility: 'hidden'
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
