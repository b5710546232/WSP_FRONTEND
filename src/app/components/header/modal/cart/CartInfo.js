import React, { Component } from 'react'
import {Button,Table} from 'react-materialize'
import {loadProduct} from '../../../../actions/ProductAction'
import {getProductById} from '../../../../reducers/products'
import {connect} from 'react-redux'
class CartInfo extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let product = this.props.products.find((product) => product.id === this.props.product)
    console.log(this.props.product);
    return (
      <tr>
        <td>{product.name}</td>
        <td>{this.props.quantity}</td>
        <td>{product.price}฿</td>
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct: (id) => {
      dispatch(loadProduct(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartInfo)
