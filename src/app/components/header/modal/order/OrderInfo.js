import React, { Component } from 'react'
import {Row,Col,Button,Table} from 'react-materialize'
import {connect} from 'react-redux'
import {uploadImage} from '../../../../aws/aws.js'
import {uploadTransferSlip} from '../../../../actions/OrderAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'
import SlipModal from './SlipModal'
class OrderInfo extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadValidator()
  }

  onUpload(e){
    e.preventDefault()
    let slip = e.target.files[0]
    let dotData = slip.name.split('.')[slip.name.split('.').length-1]
    let name= "slip"+this.props.order.id+'.'+dotData
    uploadImage(name,slip)
    let data = {
      transfer_slip : name
    }
    this.props.uploadTransferSlip(data,this.props.order.id,localStorage.token)
  }
  shouldComponentUpdate(nextProps){
    return this.props.order!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onUploadSlip){
      if (this.props.validator.is_upload_success){
        Materialize.toast('Slip #'+this.props.order.id+' is uploaded!', 4000,'light-blue')
        this.props.resetValidator()
        this.forceUpdate()
      }else {
        Materialize.toast('Slip #'+this.props.order.id+' upload failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
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
                  <div className="btn" >
                    <span>Upload Transfer Slip</span>
                    <input type="file" id="slip" onChange={(e)=>this.onUpload(e)}/>
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                  </div>
                  </div>
                </form>
                :<div className="center">
                <SlipModal order={this.props.order} />
              </div>
              }
            </Col>
          </Row>
          <br/>
          <Row>
            <Col s={12} m={12}>
              <span className="boldtext">Payment Method : </span>{this.props.paymentMethods.find((method)=> method.id===this.props.order.method).name}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col s={12} m={6}>
              <Row>
                <span className="boldtext">Address :</span>
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
          <br/>
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
                      <tr key={item.id}>
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
    uploadTransferSlip:(data,id,token)=>(
      dispatch(uploadTransferSlip(data,id,token))
    ),
    loadValidator:()=>(
      dispatch(loadValidator())
    ),
    resetValidator:()=>(
      dispatch(resetValidator())
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderInfo)
