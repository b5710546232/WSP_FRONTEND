import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button,Input,Row} from 'react-materialize'
import {login} from '../../../../actions/UserAction'
import {connect} from 'react-redux'
import {resetValidator,loadValidator} from '../../../../actions/ValidatorAction'

class LoginModal extends Component {
  onLogin(e){
    e.preventDefault()
    let username = this.refs.form.username.value
    let password = this.refs.form.password.value

    let data = {
      username: username,
      password: password
    }
    this.props.onLogin(data)
  }
  shouldComponentUpdate(nextProps){
    console.log('debug','should update');
    return this.props.user!==nextProps.user
  }
  componentDidUpdate(){
    console.log('debug','did update');
    // if (this.props.validator.onLogin){
    //   if (this.props.validator.is_login_success){
    //     Materialize.toast(this.props.user.userdata.username+' is logged in!', 4000,'light-blue')
    //     this.props.resetValidator()
    //     $('#login_modal').closeModal();
    //   }else {
    //     Materialize.toast('Invalid username or password!', 4000,'light-blue')
    //     this.props.resetValidator()
    //   }
    // }
        // if (this.props.validator.onLogin){
        //   if (this.props.validator.is_login_success){
        //     Materialize.toast(this.props.user.userdata.username+' is logged in!', 4000,'light-blue')
        //     this.props.resetValidator()
        //     $('#login_modal').closeModal();
        //   }else {
        //     Materialize.toast('Invalid username or password!', 4000,'light-blue')
        //     this.props.resetValidator()
        //   }
        // }
  }
  componentDidMount(){
    console.log('debug','didmount');
    this.props.loadValidator()
  }
  render() {
    if (this.props.validator.onLogin){
      if (this.props.validator.is_login_success){
        Materialize.toast(this.props.user.userdata.username+' is logged in!', 4000,'light-blue')
        $('#login_modal').closeModal()
        this.props.resetValidator()
      }else {
        Materialize.toast('Invalid username or password!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    console.log('debug','render');
    return (
      <Modal
        ref = "my_modal"
        id='login_modal'
        header='Login'
        trigger={
          <Button waves='light' className="space-button">Login</Button>
        }>
        <form action="" ref="form">
          <Row className="center">
            <Input name="username" s={12} label="Username"
              ref = "username"
            />
            <Input name="password" type="password" label="password" s={12}
              ref = "password"
            />
            <Button waves="light" className="space-button" type="submit" onClick={
              (e)=>this.onLogin(e)
            }>Login</Button>
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
    onLogin: (username) => {
      dispatch(login(username))
    },
    loadValidator:()=>{
      dispatch(loadValidator())
    },
    resetValidator:()=>{
      dispatch(resetValidator())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginModal)
