import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
import {connect} from 'react-redux'
import {register} from '../../../../actions/UserAction'


class RegisterModal extends Component {

  onRegister(e){
    e.preventDefault()
    console.log('refs',this.refs.form.username.value);
    let username = this.refs.form.username.value
    let password = this.refs.form.password.value
    let first_name = this.refs.form.firstname.value
    let last_name = this.refs.form.lastname.value
    let email = this.refs.form.email.value

    let data = {
      username:username,
      password:password,
      first_name:first_name,
      last_name:last_name,
      email:email
    }
    this.props.register(data)
    console.log('data',data);
    console.log(this.props.user.isRegister)

  }
  onReset(e){
    e.preventDefault()
    this.refs.form.username.value = ''
    this.refs.form.password.value = ''
    this.refs.form.confirm_password.value = ''
    this.refs.form.firstname.value = ''
    this.refs.form.lastname.value = ''
    this.refs.form.email.value = ''
  }
  render() {
    return (
      <Modal
        header='Register'
        trigger={
          <Button waves='light' className="space-button">Register</Button>
        }>
        <form ref="form">
          <Row className="center">
            <Input name="username" s={12}  label="Username" />
            <Input name="password" type="password" label="Password" s={12} />
            <Input name="confirm_password" type="password" ref="confrim_password" label="Confirm Password" s={12} />
            <Input s={6} name="firstname" label="First Name" />
            <Input s={6} name="lastname" label="Last Name"  />
            <Input name="email" type="email" label="Email" s={12} />
          </Row>
          <Row className="center">
            <Button waves="light" className="space-button" onClick = {(e)=>this.onRegister(e)}>Register</Button>
            <Button waves="light" className="space-button" onClick = {(e)=>this.onReset(e)}>Reset</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => {
      dispatch(register(data))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterModal)
