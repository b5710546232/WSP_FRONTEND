import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadOrderList} from '../../../../actions/OrderAction'
import {loadItemLines} from '../../../../actions/ItemLineAction'
import {connect} from 'react-redux'
import OrderInfo from './OrderInfo'
class OrderModal extends Component {
  componentDidMount(){
    this.props.loadOrderList(localStorage.token)
    this.props.loadItemLines(localStorage.token)
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  shouldComponentUpdate(nextProps){
    return this.props.orders!==nextProps
  }
  render() {
    return (
      <Modal
        header='Order'
        trigger={
          <Button waves='light' className="space-button">Order</Button>
        }>
        <ul className="collapsible" data-collapsible="accordion">
          {this.props.orders.map(
            (order)=>(
              <OrderInfo order={order} />
            )
          )}
        </ul>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrderList: (token) =>(
      dispatch(loadOrderList(token))
    ),
    loadItemLines: (token)=>(
      dispatch(loadItemLines(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderModal)
