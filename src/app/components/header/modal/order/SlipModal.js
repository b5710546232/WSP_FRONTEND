import React, { Component } from 'react'
import {Modal,Button,Row} from 'react-materialize'
import {connect} from 'react-redux'
import {uploadImage} from '../../../../aws/aws.js'
import {uploadTransferSlip,deleteTransferSlip} from '../../../../actions/OrderAction'

class SlipModal extends Component {
  onUpload(e){
    e.preventDefault()
    let slip = $('#slip-edit')[0].files[0]
    console.log($('#slip-edit')[0]);
    console.log(slip);
    let dotData = slip.name.split('.')[slip.name.split('.').length-1]
    let name= "slip"+this.props.order.id+'.'+dotData
    uploadImage(name,slip)
    let data = {
      transfer_slip : name
    }
    this.props.uploadTransferSlip(data,this.props.order.id,localStorage.token)
  }
  onDelete(e){
    e.preventDefault()
    this.props.deleteTransferSlip(this.props.order.id,localStorage.token)
  }
  render(){
    return (
      <Modal
        header={<div>{this.props.order.id} Transfer Slip</div>}
        trigger={
          <Button waves="light">View Transfer Slip</Button>
        }
        >
        <div>
          <Row>
            <img className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+this.props.order.transfer_slip}></img>
          </Row>
          <Row>
            <form>
              <div className="file-field input-field">
              <div className="btn" >
                <span>Edit Transfer Slip</span>
                <input type="file" id="slip-edit" onChange={(e)=>this.onUpload(e)}/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
              </div>
            </form>
          </Row>
          <Row><div className="right">
            <a className="btn-floating waves-effect waves-light red" onClick={(e)=>this.onDelete(e)}><i className="material-icons">delete</i></a>
          </div></Row>
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
    uploadTransferSlip:(data,id,token)=>(
      dispatch(uploadTransferSlip(data,id,token))
    ),
    deleteTransferSlip:(id,token)=>(
      dispatch(deleteTransferSlip(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SlipModal)
