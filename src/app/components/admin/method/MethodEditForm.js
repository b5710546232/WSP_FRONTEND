import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row} from 'react-materialize'
import {updateMethod,createMethod} from '../../../actions/AdminAction'
import {loadValidator,resetValidator} from '../../../actions/ValidatorAction'

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

    shouldComponentUpdate(nextProps){
      return this.props.admin.method!==nextProps
    }

    componentDidUpdate(){
      if (this.props.validator.onCreateMethod){
        if (this.props.validator.is_create_method_success){
          Materialize.toast('New Payment Method is created!', 4000,'light-blue')
          this.props.resetValidator()
          $('#create-method').closeModal()
        }else {
          Materialize.toast('Creating Payment Method fail!', 4000,'light-blue')
          this.props.resetValidator()
        }
      }
      /** Bug occur here **/
      if (this.props.select_method&&this.props.validator.update_method_number==this.props.select_method.id&&this.props.validator.onUpdateMethod){
        if (this.props.validator.is_update_method_success){
          Materialize.toast('Payment Method '+this.props.select_method.name+' is edited!', 4000,'light-blue')
          this.props.resetValidator()
          $('#edit-method'+this.props.select_method.id).closeModal()
        }else {
          Materialize.toast('Editing Payment Method '+this.props.select_method.name+' fail!', 4000,'light-blue')
          this.props.resetValidator()
        }
      }
    }
  componentDidMount(){
    this.props.loadValidator()
  }
  render() {
    return (
      <Modal
        id = {this.props.add? "create-method":"edit-method"+this.props.select_method.id}
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
    ),
    loadValidator:()=>(
      dispatch(loadValidator())
    ),
    resetValidator:()=>(
      dispatch(resetValidator())
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MethodEditForm)
