import React, { Component } from 'react'
import {Input,Row,Col,Button} from 'react-materialize'
class ChangePasswordPanel extends Component {

  onChangePassword(e) {
    e.preventDefault()
    let password = this.refs.form.password.value
    let re_password = this.refs.form.re_password.value
    let new_password = this.refs.form.new_password.value
    if (re_password!=password){
      Materialize.toast('Password doesn\'t matched', 4000)
    }else {
      let data = {
        password: password,
        new_password : new_password
      }
      this.props.onChangePassword(data)
    }
  }

  render(){
    return (
      <form ref="form">
        <Row><Input type="password" name="password" label="Password" s={12} /></Row>
        <Row><Input type="password" name="re_password" label="Re-Password" s={12} /></Row>
        <Row><Input type="password" name="new_password" label="New Password" s={12} /></Row>
        <Row><Col s={12}><Button waves="light" onClick={(e)=>this.onChangePassword(e)}>Change</Button></Col></Row>
      </form>
    )
  }
}
export default ChangePasswordPanel
