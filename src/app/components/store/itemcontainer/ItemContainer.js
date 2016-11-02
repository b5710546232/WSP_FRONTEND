import React, { Component } from 'react'
import {Input} from 'react-materialize'
import Item from '../item/Item'
import {connect} from 'react-redux'
import {loadProductList} from '../../../actions/ProductAction'
class ItemContainer extends Component {
  constructor(props){
    super(props)
    this.filter_product = []
  }
  componentDidMount(){
    this.props.onLoadProductList()
  }
  shouldComponentUpdate(nextProps){
    return this.props.products !== nextProps
  }
  filterProduct(){
    let temp =  this.props.products
    this.filter_product = []
    var self = this
    // console.log(this.props.filters,'state filters');
    temp.forEach(function(product) {
      if(self.props.filters.includes(product.category))
        self.filter_product.push(product)
    });
  }
  render() {
    this.filterProduct()
    return (
      <div className="col s12 m12 l12" >
        <div className="row">
          {this.filter_product.filter((product)=>product.is_active===true).map((product) =>
            (<Item
              id={product.id}
              name = {product.name}
              description = {product.description}
              price = {product.price}
              image={product.image}
              {...product}
              />)
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProductList: () => {
      dispatch(loadProductList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
