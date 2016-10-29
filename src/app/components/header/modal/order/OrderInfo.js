import React, { Component } from 'react'
import {Row,Col,Button,Table} from 'react-materialize'
import {connect} from 'react-redux'

class OrderInfo extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  render(){
    let itemList = this.props.itemlines.filter(itemline=>itemline.order===this.props.order.id)
    let address = this.props.address.find(select_address=>select_address.id===this.props.order.address)
    let price = 0
    let quantity = 0
    itemList.forEach((item)=>{
      quantity+=item.quantity
      price+=this.props.products.find((product)=>parseInt(item.product)==product.id).price*item.quantity
    })
    return (
      <li >
        <div className="collapsible-header"><h6><span className="bold left">Order ID : {this.props.order.id}</span><span className="bold right">{this.props.order.status}</span></h6></div>
        <div className="collapsible-body white">
          <Row>
            <Col s={12}  >
              {this.props.order.transfer_slip==''?
                <form>
                  <div className="file-field input-field">
                  <div className="btn">
                    <span>Upload Transfer Slip</span>
                    <input type="file"/>
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                  </div>
                  </div>
                </form>
                :<span className="right"></span>
              }
            </Col>
          </Row>
          <Row>
            <Col s={12} m={12}>
              Payment Method : {this.props.paymentMethods.find((method)=> method.id===this.props.order.method).name}
            </Col>
          </Row>
          <Row>
            <Col s={12} m={6}>
              <Row>
                Address :
              </Row>
              <Row>
                {address.address_number} {address.village} {address.road} {address.sub_distinct} {address.distinct} {address.province} {address.country} {address.zipcode}
              </Row>
            </Col>
            <Col s={12} m={6}>
              {this.props.order.is_shipped?
                <div>{this.props.order.postal_track}</div>:<div></div>
              }
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <Table className="center">
                <tr>
                  <th data-field="id">Product</th>
                  <th data-field="name">Quantity</th>
                  <th data-field="price">Price</th>
                </tr>
                <tbody>
                  {itemList.map(
                    (item)=>(
                      <tr>
                        <td>{this.props.products.find((product)=>parseInt(item.product)==product.id).name}</td>
                        <td>{item.quantity}</td>
                        <td>{(this.props.products.find((product)=>parseInt(item.product)==product.id).price)*item.quantity}</td>
                      </tr>
                    )
                  )
                  }
                  <tr className="bold bold-text">
                    <td>Total</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </li>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderInfo)
