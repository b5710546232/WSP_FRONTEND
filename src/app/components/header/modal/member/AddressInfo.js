import React, { Component } from 'react'
import {Row,Col,Button,Dropdown,Input,NavItem} from 'react-materialize'
import {createAddress,loadAddress,loadAddressList} from '../../../../actions/AddressAction'
import {connect} from 'react-redux'

class AddressInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {select_item:null,add_address:null,edit_address:null};
    this.handleAddForm = this.addAddressForm.bind(this)
  }
  addAddressForm(){
    this.setState({select_item:null,add_address:true,edit_address:null})
  }
  componentWillMount(){
    $('#address-dropdown.dropdown-button').dropdown();
  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadAddressList(token)
  }
  render(){
    return (
      <div>
        <Row>
          <Input s={12} type='select' label="Select Address" ref="select_address">
            {
              this.props.address.map((address) =>
                (
                  <option value={address.id}>{address.address_number} {address.province}</option>
                )
              )
            }
          </Input>
          <Col s={12} className="center"><Button waves="light" className="center">Create New Address</Button></Col>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressInfo)
