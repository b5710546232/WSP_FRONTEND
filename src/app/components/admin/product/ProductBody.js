import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'react-materialize'
import ProductEditModal from './ProductEditModal'
import CategoryEditModal from './CategoryEditModal'
// import '../../../../assets/scss/admin.scss'
import {deactiveProduct,reactiveProduct,deactiveCategory,reactiveCategory} from '../../../actions/AdminAction'
class ProductBody extends Component {
  constructor(props){
    super(props)
  }
  deactiveProduct(e,id){
    e.preventDefault()
    this.props.deactiveProduct(id,localStorage.token)
  }
  reactiveProduct(e,id){
    e.preventDefault()
    this.props.reactiveProduct(id,localStorage.token)
  }
  deactiveCategory(e,id){
    e.preventDefault()
    this.props.deactiveCategory(id,localStorage.token)
  }
  reactiveCategory(e,id){
    e.preventDefault()
    this.props.reactiveCategory(id,localStorage.token)
  }
  render() {
    return(
      <li>
      <br/>
      <Row>
        <Col s={1} m={1}></Col>
        <Col s={9} m={9}>
          <span>Edit Category</span>
        </Col>
        <Col s={1} m={1}>
          {this.props.select_category.is_active?
            <a className="btn-floating green"><i className="material-icons done-icon" onClick={(e)=>this.deactiveCategory(e,this.props.select_category.id)}>done</i></a> : <a className="btn-floating red"><i className="material-icons clear-icon" onClick={(e)=>this.reactiveCategory(e,this.props.select_category.id)}>clear</i></a>
          }
        </Col>
        <Col s={1} m={1}>
          <CategoryEditModal select_category={this.props.select_category} key={this.props.select_category.id}/>
        </Col>

      </Row>
      <br/>
      <table className="table-responsive">
        <thead>
          <tr>
              <th data-field="name">ID</th>
              <th data-field="name">Name</th>
              <th data-field="description">Description</th>
              <th data-field="Price">Price</th>
              <th data-field="is_active">Active</th>
              <th data-field="edit"><ProductEditModal add={true} product_key="0" select_category={this.props.select_category.id}/></th>
          </tr>
        </thead>
        <tbody>
          {this.props.select_product.map(
            (product)=>(
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.is_active ? <i onClick={(e)=>this.deactiveProduct(e,product.id)} className="material-icons done-icon">done</i> : <i onClick={(e)=>this.reactiveProduct(e,product.id)} className="material-icons clear-icon">clear</i>}</td>
                  <td><ProductEditModal select_product={product} product_key={product.id} select_category={this.props.select_category.id}/></td>
                </tr>
            )
          )}
        </tbody>
      </table>
      </li>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    deactiveProduct:(id,token)=>(dispatch(deactiveProduct(id,token))),
    reactiveProduct:(id,token)=>(dispatch(reactiveProduct(id,token))),
    deactiveCategory:(id,token)=>(dispatch(deactiveCategory(id,token))),
    reactiveCategory:(id,token)=>(dispatch(reactiveCategory(id,token)))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductBody)
