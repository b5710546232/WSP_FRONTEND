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
    let itemList = this.props.itemlines.filter((itemline)=>parseInt(itemline.order)===parseInt(this.props.order.id))
    console.log(itemList);
    return (
      <li>
        <div className="collapsible-header"><h6><span className="bold left">Order ID : {this.props.order.id}</span><span className="bold right">{this.props.order.status}</span></h6></div>
        <div className="collapsible-body white">
          <Row>
            <Col s={12} m={6}>
              Payment Method : {this.props.order.method}
            </Col>
            <Col s={12} m={6} >
              {this.props.order.transfer_slip==''?
                <Button waves="light" className="right">Upload Transfer Slip</Button>:<span className="right"></span>
              }
            </Col>
          </Row>
          <Row>
            <Col s={12} m={6}>
              <Row>
                <Col s={12} m={6}>
                  Address :
                </Col>
                <Col s={12} m={6}>
                  {this.props.order.address}
                </Col>
              </Row>
            </Col>
            <Col s={12} m={6}>
              {this.props.order.is_shipped?
                <div>{this.props.order.postal_track}</div>:<div></div>
              }
            </Col>
          </Row>
          <Row>
            <Table>
              <tr>
                <th data-field="id">Product</th>
                <th data-field="name">Quantity</th>
                <th data-field="price">Price</th>
              </tr>
              <tbody>
                {itemList.map(
                  (item)=>{
                    <tr>
                      <td>{this.props.products.find((product)=>parseInt(item.product)==product.id).name}</td>
                      <td>{item.Quantity}</td>
                      <td>{(this.props.products.find((product)=>parseInt(item.product)==product.id).price)*item.quantity}</td>
                    </tr>
                  }
                )
                }
              </tbody>
            </Table>
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
