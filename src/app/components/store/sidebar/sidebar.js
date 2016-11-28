import React, { Component } from 'react'
import Search from '../search/Search'
import Sort from '../sort/Sort'
import Filter from '../filter/Filter'
export default class Sidebar extends Component{
  componenDidMount(){
    $(".button-collapse").sideNav();
  }
  render(){
    return(
      <div>
        <ul id="slide-out" className="side-nav white">
          {/* <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li> */}
          <li><Sort/></li>
          <li><Search/></li>
          <li><Filter/></li>
          {/* <li><Sort/></li> */}
          {/* <li><a href="#!">Second Link</a></li> */}
        {/* <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
        </ul>
      <a data-activates="slide-out" className="waves-effect waves-light btn button-collapse">Sort/Search/Filter</a>
      </div>
    )
  }
}
