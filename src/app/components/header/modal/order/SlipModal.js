import React, { Component } from 'react'
import {Modal,Button,Row} from 'react-materialize'
import {connect} from 'react-redux'
import {uploadImage} from '../../../../aws/aws.js'
import {uploadTransferSlip,deleteTransferSlip} from '../../../../actions/OrderAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'

class SlipModal extends Component {
  onUpload(e){
    e.preventDefault()
    let slip = e.target.files[0]
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
    $('#slip'+this.props.order.id).closeModal();
  }
  shouldComponentUpdate(nextProps){
    return this.props.order!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onUploadSlip){
      if (this.props.validator.is_upload_success){
        Materialize.toast('Slip #'+this.props.order.id+' is uploaded!', 4000,'light-blue')
        this.props.resetValidator()
        $('#img-preview-slip').attr('src',"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+this.props.order.transfer_slip+'?'+Math.random())
      }else {
        Materialize.toast('Slip #'+this.props.order.id+' uploaded failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    if (this.props.validator.onDeleteSlip){
      if (this.props.validator.is_delete_slip_success){
        Materialize.toast('Slip #'+this.props.order.id+' is deleted!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Slip #'+this.props.order.id+' deleted failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  render(){
    return (
      <Modal
        id = {"slip"+this.props.order.id}
        header={<div>{this.props.order.id} Transfer Slip</div>}
        trigger={
          <Button waves="light">View Transfer Slip</Button>
        }
      >
        <div>
          <Row>
            <img id="img-preview-slip" className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+this.props.order.transfer_slip}></img>
          </Row>
          {this.props.read_only?
            <div></div>:
            <div>
              <Row>
                <form>
                  <div className="file-field input-field">
                    <div className="btn" >
                      <span>Edit Transfer Slip</span>
                      <input type="file" id="slipedit" onChange={(e)=>this.onUpload(e)}/>
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
    uploadTransferSlip:(data,id,token)=>(
      dispatch(uploadTransferSlip(data,id,token))
    ),
    deleteTransferSlip:(id,token)=>(
      dispatch(deleteTransferSlip(id,token))
    ),
    loadValidator:()=>(
      dispatch(loadValidator())
    ),
    resetValidator:()=>(
      dispatch(resetValidator())
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SlipModal)
