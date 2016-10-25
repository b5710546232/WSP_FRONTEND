import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
import {loadCartList} from '../../../../actions/CartAction'
import {connect} from 'react-redux'
class CartModal extends Component {
  componentDidMount(){
    let token = this.props.authed.accessToken
    this.props.loadCartList(token)
  }
  shouldComponentUpdate(nextProps){
    return this.props.cart !== nextProps
  }
  render() {
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'>Cart 1</Button>
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
            <tr>
              {/* <td>Bottle A</td>
              <td>9</td>
              <td>9.99฿</td> */}

            </tr>
          </tbody>
        </Table>
        <Button waves="light">Pay</Button>
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
