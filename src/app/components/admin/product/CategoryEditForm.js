import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createCategory,updateCategory} from '../../../actions/AdminAction'
import {Row,Button,Input,Col} from 'react-materialize'

class CategoryEditForm extends Component {
  onSave(e){
    e.preventDefault()
    let name = this.refs.form.name.value
    let description = this.refs.form.description.value
    let data = {
      name:name,
      description:description
    }
    if (this.props.add){
      this.props.createCategory(data,localStorage.token)
    }else {
      this.props.updateCategory(this.props.select_category.id,data,localStorage.token)
    }

  }
  render(){
    return (
      <Col s={12} className="white" >
        <form ref="form">
          <Row>
            <Input type="text" label="Category Name" s={12} name="name" defaultValue={this.props.select_category? this.props.select_category.name:""}></Input>
          </Row>
          <Row>
            <Input type="text" label="Description" s={12} name="description" defaultValue={this.props.select_category? this.props.description.name:""}></Input>
          </Row>
          <Row>
            <Col s={12}>
              <Button onClick={(e)=>this.onSave(e)} waves="light">Save</Button>
            </Col>
          </Row>
        </form>
      </Col>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryEditForm)