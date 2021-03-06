import React, { Component } from 'react'
import {Input,Row,Col,Button} from 'react-materialize'
import {changePassword,loadUserdata} from '../../../../actions/UserAction'
import {resetValidator,loadValidator} from '../../../../actions/ValidatorAction'
import {connect} from 'react-redux'

class ChangePasswordPanel extends Component {
  componentDidMount(){
    this.props.loadUserdata(localStorage.token)
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.user!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onChangingPassword){
      if (this.props.user.change_password_success){
        Materialize.toast('Password is changed succcessful!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Password is changed failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  onChangePassword(e) {
    e.preventDefault()
    let password = this.refs.form.password.value
    let re_password = this.refs.form.re_password.value
    let new_password = this.refs.form.new_password.value
    if (re_password!=new_password){
      Materialize.toast('Password doesn\'t matched!', 4000,'light-blue')
    }else {
      let data = {
        password: password,
        new_password : new_password
      }
      let token = this.props.user.accessToken
      this.props.onChangePassword(data,token)
    }
  }

  render(){

    return (
      <div>
      <br/>
      <form ref="form">
        <Row><Input type="password" name="password" label="Password" s={12} /></Row>
        <Row><Input type="password" name="new_password" label="New Password" s={12} /></Row>
        <Row><Input type="password" name="re_password" label="Re-Password" s={12} /></Row>
        <Row className="right-align"><Col s={12}><Button waves="light" onClick={(e)=>this.onChangePassword(e)}>Change</Button></Col></Row>
        <br/>
      </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangePassword: (data,token) => {
      dispatch(changePassword(data,token))
    },
    loadUserdata:(token)=>{
      dispatch(loadUserdata(token))
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    },
    loadValidator:()=>{
      dispatch(loadValidator())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePasswordPanel)
