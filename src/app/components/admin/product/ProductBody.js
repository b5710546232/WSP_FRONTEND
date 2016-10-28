import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductEditModal from './ProductEditModal'
// import '../../../../assets/scss/admin.scss'

export default class ProductBody extends Component {
  constructor(props){
    super(props)
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
              <th data-field="edit"><ProductEditModal add={true} select_category={this.props.select_category}/></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(
            (product)=>(
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.is_active ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
                  <td><ProductEditModal select_product={product} select_category={this.props.select_category}/></td>
                </tr>
            )
          )}
        </tbody>
      </table>
      </li>
    )
  }
}
