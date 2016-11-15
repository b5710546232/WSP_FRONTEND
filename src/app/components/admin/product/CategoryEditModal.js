import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createCategory,updateCategory} from '../../../actions/AdminAction'
import {Row,Button,Input,Col,Modal} from 'react-materialize'
import {loadValidator,resetValidator} from '../../../actions/ValidatorAction'

class CategoryEditModal extends Component {
  onSave(e){
    e.preventDefault()
    let name = this.refs.form.name.value
    let description = this.refs.form.description.value
    let data = {
      name:name,
      description:description
    }
    this.props.updateCategory(this.props.select_category.id,data,localStorage.token)

  }
  componentDidMount(){
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.category!== nextProps
  }
  componentDidUpdate(){
    if (this.props.select_category&&this.props.select_category.id==this.props.validator.edit_category_number&&this.props.validator.onEditCategory){
      if (this.props.validator.is_edit_category_success){
        Materialize.toast(this.props.select_category.name+' Category is edited!', 4000,'light-blue')
        this.props.resetValidator()
        $('#category-edit-modal'+this.props.select_category.id).closeModal();
      }else {
        Materialize.toast(this.props.select_category.name+' Category edited Fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  render(){
    return (
      <Modal
        id = {"category-edit-modal"+this.props.select_category.id}
        header={this.props.select_category.name}
        trigger={<a className="btn-floating blue"><i className="material-icons">mode_edit</i></a>}>
        <form ref="form">
          <Row>
            <Input type="text" label="Category Name" s={12} name="name" defaultValue={this.props.select_category? this.props.select_category.name:""}></Input>
          </Row>
          <Row>
            <Input type="text" label="Description" s={12} name="description" defaultValue={this.props.select_category? this.props.select_category.description:""}></Input>
          </Row>
          <Row className="right-align">
            <Col s={12}>
              <Button onClick={(e)=>this.onSave(e)} waves="light">Save</Button>
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
    createCategory: (data,token)=>{
      dispatch(createCategory(data,token))
    },
    updateCategory: (id,data,token)=>{
      dispatch(updateCategory(id,data,token))
    },
    loadValidator:()=>(dispatch(loadValidator())),
    resetValidator:()=>(dispatch(resetValidator()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryEditModal)
