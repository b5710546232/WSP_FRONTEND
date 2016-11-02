import React, { Component } from 'react'
import {Row,Col,Button,Dropdown,Input,NavItem} from 'react-materialize'
import {createAddress,editAddress,loadAddress,loadAddressList} from '../../../../actions/AddressAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'
import {connect} from 'react-redux'

class AddressInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {select_address:null,edit_address:false,add_address:false}

  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadAddressList(token)
    this.props.loadValidator()
  }

  onEditSelect(e){
    e.preventDefault()
    this.setState({select_address:JSON.parse(this.refs.form.select_address.value),edit_address:true,add_address:false})
  }

  onAddSelect(e){
    e.preventDefault()
    this.setState({select_address:{},add_address:true,edit_address:false})
  }
  onCancel(e){
    e.preventDefault()
    this.setState({select_address:null,add_address:false,edit_address:false})
  }
  onSave(e){
    e.preventDefault()
    let address_number = this.refs.edit_form.address_number.value
    let village = this.refs.edit_form.village.value
    let road = this.refs.edit_form.road.value
    let sub_distinct = this.refs.edit_form.sub_distinct.value
    let distinct = this.refs.edit_form.distinct.value
    let province = this.refs.edit_form.province.value
    let country = this.refs.edit_form.country.value
    let zipcode = this.refs.edit_form.zipcode.value

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
    if (this.state.edit_address){
      let id = this.state.select_address.id
      this.props.onEdit(data,token,id)
    }else {
      this.props.onCreate(data,token)
    }
  }
  shouldComponentUpdate(nextProps){
    return this.props.address!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onEditAddress){
      if (this.props.validator.is_edit_address_success){
        Materialize.toast(this.state.select_address.address_number+' ,'+this.state.select_address.province+' is updated succcessful!', 4000,'light-blue')
        this.props.resetValidator()
        this.setState({select_address:null,edit_address:null,add_address:null})
      }else {
        Materialize.toast(this.state.select_address.address_number+' ,'+this.state.select_address.province+'is updated failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
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
  render(){
    return (
      <div>
        <br/>
        <Row>
          <form ref="form">
            <Input s={12} type='select' name="select_address" label="Select Address" ref="select_address" >
              {
                this.props.address.map((address) =>
                  (
                    <option key={address.id} value={JSON.stringify(address)} >{address.address_number} {address.province}</option>
                  )
                )
              }
            </Input>
            {!this.state.select_address?
              <Col s={12} className="center"><Button waves="light" className="center" onClick={(e)=>this.onEditSelect(e)}>View Address</Button>&nbsp;<Button waves="light" className="center" onClick={(e)=>this.onAddSelect(e)}>Add New Address</Button></Col>:<div></div>
            }
          </form>
        </Row>
        <br/>
        { this.state.select_address?
          <div>
          <Row>
          <form ref="edit_form">
            <Input s={12} type="text" name="address_number" label="Address Number" defaultValue={this.state.select_address.address_number}></Input>
            <Input s={12} type="text" name="village" label="Village" defaultValue={this.state.select_address.village}></Input>
            <Input s={12} type="text" name="road" label="Road" defaultValue={this.state.select_address.village}></Input>
            <Input s={12} type="text" name="sub_distinct" label="Sub-District" defaultValue={this.state.select_address.sub_distinct}></Input>
            <Input s={12} type="text" name="distinct" label="District" defaultValue={this.state.select_address.distinct}></Input>
            <Input s={12} type="text" name="province" label="Province" defaultValue={this.state.select_address.province}></Input>
            <Input s={12} type="text" name="country" label="Country" defaultValue={this.state.select_address.country}></Input>
            <Input s={12} type="number" name="zipcode" label="Zipcode" defaultValue={this.state.select_address.zipcode}></Input>
            <Col s={12} className="center"><Button waves="light" onClick={(e)=>this.onSave(e)}>Save</Button>&nbsp;<Button waves="light" onClick={(e)=>this.onCancel(e)}>Cancel</Button></Col>
          </form></Row><br/></div>:<div></div>
        }
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
    onCreate: (data,token) =>{
      dispatch(createAddress(data,token))
    },
    onEdit: (data,token,id) =>{
      dispatch(editAddress(data,id,token))
    },
    loadValidator: ()=>{
      dispatch(loadValidator())
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressInfo)
