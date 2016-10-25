import React, { Component } from 'react'
import {Button,Table} from 'react-materialize'
import {getProductById} from '../../../../reducers/products'
import {connect} from 'react-redux'
import {Input} from 'react-materialize'
class CartInfo extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let product = this.props.products.find((product) => product.id === this.props.product)
    return (
      <tr>
        <td>{product.name}</td>
        <td><Input defaultValue={this.props.quantity} type="number" s={2}/></td>
        <td>{product.price}฿</td>
        <td><a className="btn-floating btn waves-effect waves-light red"><i className="material-icons small">delete</i></a></td>
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(CartInfo)
