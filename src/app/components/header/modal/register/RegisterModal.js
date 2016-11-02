import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
import {connect} from 'react-redux'
import {register} from '../../../../actions/UserAction'
import {resetValidator,loadValidator} from '../../../../actions/ValidatorAction'


class RegisterModal extends Component {

  onRegister(e){
    e.preventDefault()
    let username = this.refs.form.username.value
    let password = this.refs.form.password.value
    let confirm_password = this.refs.form.confirm_password.value
    if (password!=confirm_password){
      Materialize.toast('Password doesn\'t matched!', 4000,'light-blue')
    }else {
      let first_name = this.refs.form.firstname.value
      let last_name = this.refs.form.lastname.value
      let email = this.refs.form.email.value
      if (email.split('@').length!=2){
        Materialize.toast('Invalid Email Format!', 4000,'light-blue')
      }else {
        let data = {
          username:username,
          password:password,
          first_name:first_name,
          last_name:last_name,
          email:email
        }
        this.props.register(data)
      }
    }
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

  componentDidMount(){
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.user!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onRegister){
      if (this.props.validator.is_register_success){
        Materialize.toast('New user is registered!', 4000,'light-blue')
        this.props.resetValidator()
        $('#register_modal').closeModal();
      }else {
        Materialize.toast('Registered Fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  render() {
    return (
      <Modal
        id="register_modal"
        header='Register'
        trigger={
          <Button waves='light' className="space-button">Register</Button>
        }>
        <form ref="form">
          <Row className="center">
            <Input name="username" s={12}  label="Username" />
            <Input name="password" type="password" label="Password" s={12} />
            <Input name="confirm_password" type="password"  label="Confirm Password" s={12} />
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
    },
    loadValidator:()=>{
      dispatch(loadValidator())
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterModal)
