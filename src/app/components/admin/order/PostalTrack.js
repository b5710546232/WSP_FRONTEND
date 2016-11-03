import {confirmPayment,unconfirmPayment} from '../../../actions/AdminAction'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row,Col} from 'react-materialize'
import {updateTrack,deleteTrack} from '../../../actions/AdminAction'
import {loadValidator,resetValidator} from '../../../actions/ValidatorAction'

class PostalTrack extends Component{
  onUpdate(e){
    e.preventDefault()
    let data={
      track:this.refs.form.track.value
    }
    this.props.updateTrack(this.props.order.id,data,localStorage.token)
  }
  onDelete(e){
    e.preventDefault()
    this.props.deleteTrack(this.props.order.id,localStorage.token)
  }
  componentDidMount(){
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.order!== nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onUpdateTrack){
      if (this.props.validator.is_update_track_success){
        Materialize.toast('#'+this.props.order.id+' Order Postal Track is updated!', 4000,'light-blue')
        this.props.resetValidator()
        $('#track'+this.props.order.id).closeModal();
      }else {
        Materialize.toast('#'+this.props.order.id+' Order Postal Track update fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    if (this.props.validator.onUnconfirmOrder){
      if (this.props.validator.is_unconfirm_order_success){
        Materialize.toast('#'+this.props.order.id+' Order Postal Track is deleted!', 4000,'light-blue')
        this.props.resetValidator()
        $('#track'+this.props.order.id).closeModal();
      }else {
        Materialize.toast('#'+this.props.order.id+' Order Postal Track delete fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  render(){
    return (
      <Modal
        id={"track"+this.props.order.id}
        header="Update Postal Track"
        trigger={<Button waves="light">Update Postal Track</Button>}
        >
        <form ref="form">
          <Input name="track" s={12} type="text" label="Postal Track" defaultValue={this.props.order.postal_track? this.props.order.postal_track:""}></Input>
          <Row>
            <div className="center">
                <Button waves="light" onClick={(e)=>this.onUpdate(e)}>Update</Button>
            </div>
            <Col className="right">
              <a className="btn-floating waves-effect waves-light red" onClick={(e)=>this.onDelete(e)}><i className="material-icons">delete</i></a>
            </Col>
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
    deleteTrack:(id,token)=>(
      dispatch(deleteTrack(id,token))
    ),
    updateTrack:(id,data,token)=>(
      dispatch(updateTrack(id,data,token))
    ),
    loadValidator:()=>(dispatch(loadValidator())),
    resetValidator:()=>(dispatch(resetValidator()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostalTrack)
