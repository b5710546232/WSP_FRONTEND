import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
import CartInfo from './CartInfo'
import {loadCartList} from '../../../../actions/CartAction'
import {connect} from 'react-redux'
class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {cart_info:true,payment_info:false,summarize:false};
    this.total = 0
  }
  toPayment(){
    this.setState({cart_info:false,payment_info:true,summarize:false})
  }
  componentDidMount(){
    let token = this.props.authed.accessToken
    this.props.loadCartList(token)
    this.total = this.props.cart.length
  }
  shouldComponentUpdate(nextProps){
    return this.props.cart !== nextProps
  }
  render() {
    let total = this.props.cart.length
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'>{total}</Button>
        }
        >

        <Table>
          <thead>
            <tr>
              <th data-field="id">Product Name</th>
              <th data-field="name">Quantity</th>
              <th data-field="price">Price</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cart.map((item) =>
              (<CartInfo
                key={item.id}
                quantity = {item.quantity}
                {...item}
                />)
            )}
          </tbody>
        </Table>
        <Button waves="light" onClick={()=>this.toPayment()}>Pay</Button>

      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadCartList: (token) => {
      dispatch(loadCartList(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartModal)
