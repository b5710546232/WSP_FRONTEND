import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button,Input,Row} from 'react-materialize'
import {login} from '../../../../actions/UserAction'
import {connect} from 'react-redux'
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
    this.props.loadUserdata(this.props.user.accessToken)

  }
  render() {
    return (
      <Modal
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
             <Button waves="light" type="submit" className="space-button" onClick={
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
    loadUserdata:(token) => {
      dispatch(loadUserdata(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginModal)
