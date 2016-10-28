import React, { Component } from 'react'
import {Row,Button,Input,Col} from 'react-materialize'
import {connect} from 'react-redux'
import {loadAddressList,createAddress} from '../../../../actions/AddressAction'
import {loadPaymentMethodList} from '../../../../actions/PaymentMethodAction'

class PaymentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {select_address:null,select_method:null,add_address:false};
  }
  onShowAddForm(){
    this.setState({select_address:null,select_method:null,add_address:true})
  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadAddressList(token)
    this.props.loadPaymentMethodList(token)
  }
  onCancel(e) {
    e.preventDefault()
    this.setState(add_address:false)
  }
  shouldComponentUpdate(nextProps){
    return this.props.address !== nextProps
  }
  onSave(e){
    e.preventDefault()
    let address_number = this.refs.add_form.address_number.value
    let village = this.refs.add_form.village.value
    let road = this.refs.add_form.road.value
    let sub_distinct = this.refs.add_form.sub_distinct.value
    let distinct = this.refs.add_form.distinct.value
    let province = this.refs.add_form.province.value
    let country = this.refs.add_form.country.value
    let zipcode = this.refs.add_form.zipcode.value

    let token = this.props.user.accessToken
    let data = {
      address_number: address_number,
      village : village,
      road : road,
      sub_distinct : sub_distinct,
      distinct : distinct,
      province : province,
      country : country,
      zipcode : zipcode
    }
    this.props.onCreate(data,token)
    this.setState({select_address:null,select_method:null,add_address:null})
  }
  onConfirm(e){
    e.preventDefault()
    let select_method = this.refs.form.select_method.value
    let select_address = this.refs.form.select_address.value
    console.log(select_method);
    console.log(select_address);
    this.props.confirm(select_address,select_method)
  }
  render(){
    return (
      <div>
        <form ref="form">
          <Input s={12} type='select' name="select_method" label="Select Payment Method" ref="select_method" >
            {
              this.props.paymentMethods.filter((method)=>method.is_active===true).map((method) =>
                (
                  <option key={method.id} value={method.id} >{method.name}</option>
                )
              )
            }
          </Input>
          <Input s={12} type='select' name="select_address" label="Select Address" ref="select_address" >
            {
              this.props.address.map((address) =>
                (
                  <option key={address.id} value={address.id} >{address.address_number} {address.province}</option>
                )
              )
            }
          </Input>
        </form>
        {!this.state.add_address?
          <Row>
            <Button waves="light" onClick={()=>this.onShowAddForm()}>Add New Address</Button>
          </Row>:
          <form ref="add_form">
            <Input s={12} type="text" name="address_number" label="Address Number" ></Input>
            <Input s={12} type="text" name="village" label="Village" ></Input>
            <Input s={12} type="text" name="road" label="Road" ></Input>
            <Input s={12} type="text" name="sub_distinct" label="Sub-Distinct" ></Input>
            <Input s={12} type="text" name="distinct" label="Distinct"></Input>
            <Input s={12} type="text" name="province" label="Province" ></Input>
            <Input s={12} type="text" name="country" label="Country" ></Input>
            <Input s={12} type="number" name="zipcode" label="Zipcode"></Input>
            <Col s={12} className="center"><Button waves="light" onClick={(e)=>this.onSave(e)}>Save</Button><Button waves="light" onClick={(e)=>this.onCancel(e)}>Cancel</Button></Col>
          </form>
        }
        <Row>
          <Button waves="light" className="left" onClick={this.props.back}>Back</Button>
          {this.props.address.length>0&&this.props.paymentMethods.length>0? <Button waves="light" className="right" onClick={(e)=>this.onConfirm(e)}>Confirm</Button>:<div></div>}
        </Row>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadAddressList: (token) => {
      dispatch(loadAddressList(token))
    },
    loadPaymentMethodList: (token) =>{
      dispatch(loadPaymentMethodList(token))
    },
    onCreate: (data,token)=>{
      dispatch(createAddress(data,token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PaymentInfo)
