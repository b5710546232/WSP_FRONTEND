import React, { Component } from 'react'
import {Row,Input,Col,Button} from 'react-materialize'
class MemberInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {is_edit:false};
    this.handleEdit = this.changeState.bind(this,true)
    this.handleSave = this.onSave.bind(this)
  }
  changeState(value){
    this.setState({is_edit:value})
  }
  onSave(e) {
    e.preventDefault()
    let first_name = this.refs.form.first_name.value
    let last_name = this.refs.form.last_name.value
    let email = this.refs.form.email.value
    let data = {
      first_name: first_name,
      last_name: last_name,
      email : email
    }
    this.changeState(false)
    this.props.onSave(data)
  }
  render(){
    return (
      <div>
        <Row><Col s={12} ><span className="medium">Username : </span>{this.props.username}</Col></Row>
        {!this.state.is_edit　?
          <div>
            <Row>
              <Col s={12} m={6}><span className="medium">Firstname : </span>{this.props.first_name}</Col>
              <Col s={12} m={6}><span className="medium">Lastname : </span>{this.props.last_name}</Col>
            </Row>
            <Row>
              <Col s={12} ><span className="medium">Email : </span>{this.props.email}</Col>
            </Row>
            <Row><Col s={12}><Button waves="light" onClick={this.handleEdit}>Edit</Button></Col></Row>
          </div> :
          <form ref="form">
            <Row>
              <Input type="text" name="first_name" label="Firstname" defaultValue={this.props.first_name} s={12} m={6} ref="first_name"></Input>
              <Input type="text" name="last_name" label="Lastname" defaultValue={this.props.last_name} s={12} m={6} ref="last_name"></Input>
            </Row>
            <Row><Input type="email" name="email" label="Email" defaultValue={this.props.email} s={12} ref="email"></Input></Row>
            <Row><Col s={12}><Button waves="light" onClick={(e)=>this.onSave(e)}>Save</Button></Col></Row>
          </form>
        }
      </div>
    )
  }
}
export default MemberInfo
