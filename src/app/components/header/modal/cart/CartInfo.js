import React, { Component } from 'react'
import {Button,Table} from 'react-materialize'
import {getProductById} from '../../../../reducers/products'
import {connect} from 'react-redux'
import {Input} from 'react-materialize'
import {deleteItemInCart} from '../../../../actions/CartAction'

class CartInfo extends Component {
  constructor(props){
    super(props)
  }
  onDelete(e){
    e.preventDefault()
    let id = this.props.id
    let token = this.props.user.accessToken
    this.props.onDelete(id,token)
  }
  render(){
    // console.log(this.props.key);
    let product = this.props.products.find((product) => product.id === this.props.product)
    return (
      <tr>
        <td>{product.name}</td>
        <td>{this.props.editable? <Input defaultValue={this.props.quantity} type="number" s={2}/>:<div>{this.props.quantity}</div>}</td>
        <td>{product.price}฿</td>
        {this.props.editable? <td><a className="btn-floating btn waves-effect waves-light red" onClick={(e)=>this.onDelete(e)}><i className="material-icons small">delete</i></a></td>: <a></a>}
      </tr>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete : (id,token)=>{
      dispatch(deleteItemInCart(id,token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartInfo)
