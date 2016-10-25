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
    //{address_number,village,road,sub_distinct,distinct,province,country,zipcode}
    this.setState({select_item:null,add_address:true,edit_address:null})
  }
  componentWillMount(){

    $('.dropdown-button').dropdown();
  }
  render(){

    return (
      <div>
        <Row>
          <Col s={6}>
            <a className='dropdown-button btn' href='#' data-activates='dropdown-structure'>Drop Me!</a>
            <ul id='dropdown-structure' className='dropdown-content'>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
          </Col>
          <span>{this.props.method }</span>
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
    // onLogout: () => {
    //   dispatch(logout())
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressInfo)
