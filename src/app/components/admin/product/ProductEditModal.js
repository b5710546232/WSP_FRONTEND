import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row,Col} from 'react-materialize'
import {updateProduct,createProduct} from '../../../actions/AdminAction'
import {uploadImage} from '../../../aws/aws.js'

class ProductEditModal extends Component {
  constructor(props){
    super(props)
    this.state={image_location:"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/no-img.jpg"}
  }
  onSave(e){
    e.preventDefault()
    let dotData=null;
    let img_name = null;
    let id = this.props.admin.product.length+1
    if (this.props.select_product){
      id = this.props.select_product.id
    }
    if (this.state.image){
      dotData = this.state.image.name.split('.')[this.state.image.name.split('.').length-1]
      img_name= "product"+id+'.'+dotData
      uploadImage(img_name,this.state.image)
    }
    else {
      img_name=this.props.select_product.image
    }
    console.log(img_name);
    let name = this.refs.form.name.value
    let description = this.refs.form.product_description.value
    let price = this.refs.form.price.value
    let data = {
      name:name,
      description:description,
      price:price,
      category:this.props.select_category,
      is_active: true,
      image: img_name
    }
    if (this.props.add){
      this.props.createProduct(data,localStorage.token)
    }else {
      this.props.updateProduct(this.props.select_product.id,data,localStorage.token)
    }
  }
  onUpload(e){
    e.preventDefault()
    console.log("AAA");
    let file = e.target.files[0]
    var reader = new FileReader();
    reader.onload = (e)=>{
      $('#img-preview').attr('src',e.target.result)
      this.setState({image:file,image_location:e.target.result})
    }
    reader.readAsDataURL(file);
  }

  componentDidMount(){
      let value=""
      if (!this.props.add) value = this.props.select_product.description
      $('#product_description').val(value);
      this.refs.form.product_description.value = value
      $('#product_description').trigger('autoresize');
      if (this.props.select_product!=null){
        console.log(this.props.select_product);
        if (this.props.select_product.image!=''&&this.props.select_product.image!=null){
          let url = "https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+this.props.select_product.image
          this.setState({image_location:url})
        }else {
          let url = "https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/no-img.jpg"
          this.setState({image_location:url})
        }
      }
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
          <img id="img-preview" src={this.state.image_location} className="responsive-img"></img>
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload Product Image</span>
              <input type="file" onChange={(e)=>this.onUpload(e)}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
          <Input label="Product Name" name="name" defaultValue={this.props.add? "":this.props.select_product.name} s={12}/>
          <div className="input-field col s12">
            <textarea name="product_description" id="product_description" className="materialize-textarea" ></textarea>
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
