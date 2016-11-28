import React, { Component } from 'react'
import Search from '../search/Search'
import Sort from '../sort/Sort'
import Filter from '../filter/Filter'
export default class Sidebar extends Component{
  componentDidMount(){
    $("#filterSide").sideNav();
  }
  render(){
    let fix = {
      position : "fixed"
    }
    return(
      <div>
        <ul id="slide-out-filter" className="side-nav white">
          {/* <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li> */}
          <li><Sort/></li>
          <li><Search/></li>
          <li><Filter/></li>
          {/* <li><Sort/></li> */}
          {/* <li><a href="#!">Second Link</a></li> */}
          {/* <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
        </ul>
        <a style={fix} data-activates="slide-out-filter" id="filterSide" className="waves-effect waves-light btn button-collapse">Sort/Search/Filter</a>
      </div>
    )
  }
}
