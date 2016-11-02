import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductEditModal from './ProductEditModal'
// import '../../../../assets/scss/admin.scss'
import {deactiveProduct,reactiveProduct} from '../../../actions/AdminAction'
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
  render() {
    return(
      <li>
      <table className="table-responsive">
        <thead>
          <tr>
              <th data-field="name">ID</th>
              <th data-field="name">Name</th>
              <th data-field="description">Description</th>
              <th data-field="Price">Price</th>
              <th data-field="is_active">Active</th>
              <th data-field="edit"><ProductEditModal add={true} product_key="0" select_category={this.props.select_category}/></th>
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
                  <td><ProductEditModal select_product={product} product_key={product.id} select_category={this.props.select_category}/></td>
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
    reactiveProduct:(id,token)=>(dispatch(reactiveProduct(id,token)))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductBody)
