import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row,Col} from 'react-materialize'
import {updateProduct,createProduct} from '../../../actions/AdminAction'

class ProductEditModal extends Component {
  onSave(e){
    e.preventDefault()
    let name = this.refs.form.name.value
    let description = $('#product_description').val();
    console.log(description);
    console.log(this.props.select_category);
    let price = this.refs.form.price.value
    let data = {
      name:name,
      description:description,
      price:price,
      category:this.props.select_category,
      is_active: true
    }
    if (this.props.add){
      this.props.createProduct(data,localStorage.token)
    }else {
      this.props.updateProduct(this.props.select_product.id,data,localStorage.token)
    }
  }
  componentWillMount(){
      let value=""
      if (!this.props.add) value = this.props.select_product.description
      $('#product_description').val(value);
      $('#product_description').trigger('autoresize');
  }
  render() {
    return (
      <Modal
        header={this.props.add?
          <div>New Product</div>:this.props.select_product.name
        }
        trigger={
          this.props.add?
          <a className="btn-floating green"><i className="material-icons">add</i></a>:
            <a className="btn-floating blue"><i className="material-icons">mode_edit</i></a>
        }>
        <form ref="form">
          <Input label="Product Name" name="name" defaultValue={this.props.add? "":this.props.select_product.name} s={12}/>
          <div className="input-field col s12">
            <textarea id="product_description" className="materialize-textarea" ></textarea>
            <label for="product_description">Product Description</label>
          </div>
          <Input label="Product Price" name="price" defaultValue={this.props.add? "":this.props.select_product.price} s={12}/>
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
    createProduct:(data,token)=>(
      dispatch(createProduct(data,token))
    ),
    updateProduct: (id,data,token) =>(
      dispatch(updateProduct(id,data,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductEditModal)
