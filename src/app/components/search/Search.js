import React, { Component } from 'react'
import SearchBar from 'react-search-bar'
import '../../../assets/scss/search.scss'
export default class Search extends Component{

  render() {
    return (
      <div>
        <nav>
        <div className="nav-wrapper">
        <form>
        <div center className="input-field">
          <input id="search" type="search" required placeholder="Search..."/>
          <label for="search"></label>
        </div>
        </form>
        </div>
        </nav>
      </div>
    )
  }
}
