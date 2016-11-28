import React, { Component } from 'react'
// import {Dropdown,NavItem,Button} from 'react-materialize'
import {connect} from 'react-redux'
import {sortNone,sortPriceLow,sortPriceHigh,sortNameA,sortNameZ} from '../../../actions/SortAction'
import {loadProductList} from '../../../actions/ProductAction'
class Sort extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : "Sort by A-Z"
    }
  }
  componentWillMount(){
    this.sortByNameA()
  }
  sortByNone(){
    this.props.sortNone(this.props.search.search_product)
  }
  sortByNameA(){
    this.props.sortNameA(this.props.search.search_product)
    this.setState({name : "Sort by A-Z"})
  }
  sortByNameZ(){
    this.props.sortNameZ(this.props.search.search_product)
    this.setState({name : "Sort by Z-A"})
  }
  sortByPriceLow(){
    this.props.sortPriceLow(this.props.search.search_product)
    this.setState({name : "Sort by Price Low-High"})
  }
  sortByPriceHigh(){
    this.props.sortPriceHigh(this.props.search.search_product)
    this.setState({name : "Sort by Price High-Low"})
  }
  render(){
    return(
      <div className="sort_container">
        <a className='dropdown-button btn' data-activates='dropdown1'>{this.state.name}</a>
         <ul id='dropdown1' className='dropdown-content'>
           <li><span onClick={()=>this.sortByNameA()}>Name: A-Z</span></li>
           <li><span onClick={()=>this.sortByNameZ()}>Name: Z-A</span></li>
           <li><span onClick={()=>this.sortByPriceLow()}>Price: Low-High</span></li>
           <li><span onClick={()=>this.sortByPriceHigh()}>Price: High-Low</span></li>
         </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortNone: (products) => {
      dispatch(sortNone(products))
    },
    sortNameA: (products) => {
      dispatch(sortNameA(products))
    },
    sortNameZ: (products) => {
      dispatch(sortNameZ(products))
    },
    sortPriceLow: (products) => {
      dispatch(sortPriceLow(products))
    },
    sortPriceHigh: (products) => {
      dispatch(sortPriceHigh(products))
    },
    onLoadProductList: () => {
      dispatch(loadProductList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort)
