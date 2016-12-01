import React, { Component } from 'react'
import {Row,Button,Input,Col} from 'react-materialize'
import {connect} from 'react-redux'
import {loadAddressList,createAddress} from '../../../../actions/AddressAction'
import {loadPaymentMethodList,getCreditCardToken} from '../../../../actions/PaymentMethodAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'
class PaymentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {select_address:null,select_method:null,add_address:false,credit:false,credit_token:null,credit_data:null};
  }
  onShowAddForm(){
    this.setState({select_address:null,select_method:null,add_address:true})
  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadAddressList(token)
    this.props.loadPaymentMethodList(token)
    this.props.loadValidator()
    this.getPaypalToken()
  }
  onCancel(e) {
    e.preventDefault()
    console.log('cancel');
    this.setState({add_address:false})
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
  shouldComponentUpdate(nextProps){
    return this.props.address!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onCreateAddress){
      if (this.props.validator.is_create_address_success){
        Materialize.toast('New Address is created succcessful!', 4000,'light-blue')
        this.props.resetValidator()
        this.setState({select_address:null,edit_address:null,add_address:null})
      }else {
        Materialize.toast('New Address is created failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  onConfirm(e){
    e.preventDefault()
    let select_method = this.refs.form.select_method.value
    let select_address = this.refs.form.select_address.value
    if (select_method===''||select_method===null){
      Materialize.toast('Payment Method is empty!', 4000,'light-blue')
    }
    if (select_address===''||select_address===null){
      Materialize.toast('Select Address is empty!', 4000,'light-blue')
    }
    if (!(select_method===''||select_method===null)&&!(select_address===''||select_address===null)){
      if(this.state.credit){
          let credit_data = {
            number: this.refs.credit_form.credit_number.value,
            type: this.refs.credit_form.cardtype_select.value,
            expire_month: this.refs.credit_form.credit_expire_month.value,
            expire_year: this.refs.credit_form.credit_expire_year.value,
            cvv2: this.refs.credit_form.credit_cvv2.value,
            first_name: this.refs.credit_form.credit_firstname.value,
            last_name: this.refs.credit_form.credit_lastname.value
          }
          this.props.confirm(select_address,1,this.state.credit_token,credit_data)
      }
      else{
        this.props.confirm(select_address,select_method,this.state.credit_token,this.state.credit_data)
      }
    }
  }

  getPaypalToken(){
    $.ajax({
      "url": "https://api.sandbox.paypal.com/v1/oauth2/token",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": "Basic QWVNYV9qYUhrZEpKZE1XZ3lPRDJ5NU85QUw2TnRuRWVZckZsWHhZNTF2RXlvMy1IT2QyWUhETVZ4R2RvQUsyYzh2XzFVTzVVWWE1UGl6YS06RU1Wc3JwWU5vb015X2hfWlMwS0xzcW5sak93QXgxZWh3WkVpekNrR0VNeDdDM0xjdVpOYlBEczNNaWFPZllfaGdjUUk4ZENtM1VUUXFfYlk=",
        "cache-control": "no-cache",
      },
      "data": {
        "grant_type": "client_credentials"
      }
    })
    .done((res) => {
      this.setState({credit_token:res.access_token})
    })
    .fail((res) => {
      console.log('Error')
      console.log(res)
    })
  }

  paymentChange(e){
    if(e.target.value==='credit'){
      this.setState({credit:true})

    }
    else {
      this.setState({credit:false})
    }
  }

  render(){
    return (
      <div>
        <form ref="form">
          <Input s={12} type='select' name="select_method" label="Select Payment Method" ref="select_method" onChange={(e)=>this.paymentChange(e)}>
            {
              this.props.paymentMethods.filter((method)=>method.is_active===true&&method.id!=1).map((method,index) =>
                (
                      <option key={method.id} value={method.id} >{method.name}</option>
                )

              )
            }
            <option value='credit'>Credit Card</option>
          </Input>
          {this.state.credit?
            <form ref="credit_form">
                <div className="row">
                <Input s={4} type='select' name="cardtype_select" label="Credit Card Type" ref="select_method">
                  <option value='mastercard'>mastercard</option>
                  <option value='visa'>visa</option>
                </Input>
                <Input s={8} type="text" name="credit_number" label="Credit Card Number"></Input>
                </div>
                <div className="row">
                  <Input s={6} type="text" name="credit_firstname" label="Firstname"></Input>
                  <Input s={6} type="text" name="credit_lastname" label="Lastname"></Input>
                </div>
                <div className="row">
                  <Input s={4} type="number" name="credit_expire_month" label="Expire Month"></Input>
                  <Input s={4} type="number" name="credit_expire_year" label="Expire Year"></Input>
                  <Input s={4} type="number" name="credit_cvv2" label="CVV number"></Input>
                </div>

            </form>
          : <div></div>}
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
            <Col s={12} className="center"><Button waves="light" onClick={(e)=>this.onSave(e)}>Save</Button>&nbsp;<Button waves="light" onClick={(e)=>this.onCancel(e)}>Cancel</Button></Col>
          </form>
        }
        <br/>
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
    },
    loadValidator:()=>{
      dispatch(loadValidator())
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    },
    getCreditCardToken: (token) =>{
      dispatch(getCreditCardToken(token))
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PaymentInfo)
