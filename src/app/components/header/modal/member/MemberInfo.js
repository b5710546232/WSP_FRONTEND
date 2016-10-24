import React, { Component } from 'react'
import {Row,Input,Col,Button} from 'react-materialize'
class MemberInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {is_edit:false};
    this.handleEdit = this.changeState.bind(this,true)
    this.handleSave = this.changeState.bind(this,false)
  }
  changeState(value){
    this.setState({is_edit:value})
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
            <Button waves="light" onClick={this.handleEdit}>Edit</Button>
          </div> :
          <div>
            <Row>
              <Input type="text" label="Firstname" defaultValue={this.props.first_name} s={12} m={6}></Input>
              <Input type="text" label="Lastname" defaultValue={this.props.last_name} s={12} m={6}></Input>
            </Row>
            <Row><Input type="email" label="Email" defaultValue={this.props.email} s={12} ></Input></Row>
            <Button waves="light" onClick={this.handleSave}>Save</Button>
          </div>
        }
      </div>
    )
  }
}
export default MemberInfo
