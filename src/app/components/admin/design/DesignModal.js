import React, { Component } from 'react'
import {Modal,Button,Input} from 'react-materialize'
import {connect} from 'react-redux'
import {confirmDesign,deconfirmDesign} from '../../../actions/AdminAction'

class DesignModal extends Component {
  onConfirm(e,id){
    e.preventDefault()
    let data = {
      price : this.refs.form["price"+id].value
    }
    console.log("value",data);
    this.props.confirmDesign(id,data,localStorage.token)
  }
  onDeconfirm(e,id){
    e.preventDefault()
    this.props.deconfirmDesign(id,localStorage.token)
  }
  render(){
    return (
      <Modal
        header="Saved Design"
        trigger={
          <Button>View Requested Design</Button>
        }
      >
        <div className="row">
          {
            this.props.admin.design.filter((design)=>(design.is_request&&design.is_active)).map((design)=>(
              <div className="col s12 m6" >
                <img className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+design.image}></img>
                <div className="row center">
                  <span>By {this.props.admin.user.find((user)=>user.id==design.user).username}</span>
                </div>
                <div className="row center">
                  {
                    design.is_confirm?
                      <Button onClick={(e)=>this.onDeconfirm(e,design.id)}>Unconfirm</Button>:
                    <div>
                      <div className="center row">
                        <form ref="form"><Input type="number" name={"price"+design.id} label="Price"></Input></form>
                      </div>
                      <div className="row center">
                        <Button onClick={(e)=>this.onConfirm(e,design.id)}>Confirm</Button>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    confirmDesign: (id,data,token)=>(
      dispatch(confirmDesign(id,data,token))
    ),
    deconfirmDesign: (id,token)=>(
      dispatch(deconfirmDesign(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DesignModal)
