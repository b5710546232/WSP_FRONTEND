import React, { Component } from 'react'
import {Row,Col,Button,Dropdown,Input,NavItem} from 'react-materialize'
import {createAddress,loadAddress,loadAddressList} from '../../../../actions/AddressAction'
import {connect} from 'react-redux'

class AddressInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {select_address:null}

  }
  componentWillMount(){
    $('#address-dropdown.dropdown-button').dropdown();
  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadAddressList(token)
  }

  onSelect(e){
    e.preventDefault()
    this.setState({select_address:this.refs.form.select_address.value})
    console.log(this.refs.form.select_address);
  }

  onEdit(e){
    e.preventDefault()
    let address_number = this.refs.edit_form.address_number.value
    let village = this.refs.edit_form.village.value
    let road = this.refs.edit_form.road.value
    let sub_distinct = this.refs.edit_form.sub_distinct.value
    let distinct = this.refs.edit_form.distinct.value
    let province = this.refs.edit_form.province.value
    let country = this.refs.edit_form.country.value
    let zipcode = this.refs.edit_form.zipcode.value
    let token = localStorage.token

  }

  render(){
    return (
      <div>
        <Row>
          <form ref="form">
            <Input s={12} type='select' name="select_address" label="Select Address" ref="select_address" >
              {
                this.props.address.map((address) =>
                  (
                    <option value={address} >{address.address_number} {address.province}</option>
                  )
                )
              }
            </Input>
            <Col s={12} className="center"><Button waves="light" className="center" onClick={(e)=>this.onSelect(e)}>Edit</Button></Col>
          </form>
        </Row>
        { this.state.select_address?
          <form ref="edit_form">
            <Input s={12} type="text" name="address_number" label="Address Number" defaultValue={this.state.select_address.address_number}></Input>
            <Input s={12} type="text" name="village" label="Village" defaultValue={this.state.select_address.village}></Input>
            <Input s={12} type="text" name="road" label="Road" defaultValue={this.state.select_address.village}></Input>
            <Input s={12} type="text" name="sub_distinct" label="Sub-Distinct" defaultValue={this.state.select_address.sub_distinct}></Input>
            <Input s={12} type="text" name="distinct" label="Distinct" defaultValue={this.state.select_address.distinct}></Input>
            <Input s={12} type="text" name="province" label="Province" defaultValue={this.state.select_address.province}></Input>
            <Input s={12} type="text" name="country" label="Country" defaultValue={this.state.select_address.country}></Input>
            <Input s={12} type="number" name="zipcode" label="Zipcode" defaultValue={this.state.select_address.zipcode}></Input>
            <Col s={12} className="center"><Button waves="light">Save</Button></Col>
          </form>:<div></div>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressInfo)
