import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row} from 'react-materialize'
import {updateMethod,createMethod} from '../../../actions/AdminAction'

class MethodEditForm extends Component {
  onSave(e){
    e.preventDefault()
    let name = this.refs.form.name.value
    let is_active = $('#is_active').prop('checked')
    let data = {
      name:name,
      type:'B',
      is_active: true
    }
    if (this.props.add){
      this.props.createMethod(data,localStorage.token)
    }else {
      this.props.updateMethod(this.props.select_method.id,data,localStorage.token)
    }
  }

  render() {
    return (
      <Modal
        header={this.props.add?
          <span>New Payment Method</span>:this.props.select_method.name
        }
        trigger={
          this.props.add?
          <a className="btn-floating green"><i className="material-icons">add</i></a>:
            <a className="btn-floating blue"><i className="material-icons">mode_edit</i></a>
        }>
        <form ref="form">
          <Input s={6} label="Payment Method Name" name="name" defaultValue={this.props.add? "":this.props.select_method.name} s={12}/>

          <Row>
              <Button waves="light" onClick={(e)=>this.onSave(e)} className="right">Save</Button>
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
    createMethod:(data,token)=>(
      dispatch(createMethod(data,token))
    ),
    updateMethod: (id,data,token) =>(
      dispatch(updateMethod(id,data,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MethodEditForm)
