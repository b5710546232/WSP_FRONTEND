import React, { Component } from 'react'
import {Button,Table} from 'react-materialize'
import {getProductById} from '../../../../reducers/products'
import {connect} from 'react-redux'
import {Input} from 'react-materialize'
import {deleteItemInCart,updateCart} from '../../../../actions/CartAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'

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
  onUpdate(e){
    e.preventDefault()
    let data={
      product:this.props.product,
      quantity:this.refs.form.quantity.value
    }
    this.props.updateCart(data,this.props.id,localStorage.token)
  }
  shouldComponentUpdate(nextProps){
    return this.props.cart!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onDeleteItemInCart){
      if (this.props.validator.is_delete_item_success){
        Materialize.toast(this.props.products.find((product) => product.id === this.props.product).name+' is removed from cart!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast(this.props.products.find((product) => product.id === this.props.product).name+' removed from cart fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  render(){
    // console.log(this.props.key);
    let product = this.props.products.find((product) => product.id === this.props.product)
    return (
      <tr>
        <td>{product.name}</td>
        <td>{this.props.editable? <form ref="form"><Input defaultValue={this.props.quantity} onChange={(e)=>this.onUpdate(e)} type="number" name="quantity" s={2}/></form>:<div>{this.props.quantity}</div>}</td>
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
    },
    loadValidator:()=>(
      dispatch(loadValidator())
    ),
    resetValidator:()=>(
      dispatch(resetValidator())
    ),
    updateCart:(data,id,token)=>{
      dispatch(updateCart(data,id,token))
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartInfo)
