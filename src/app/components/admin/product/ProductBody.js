import React, { Component } from 'react'
import {connect} from 'react-redux'
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
              <th data-field="name">Name</th>
              <th data-field="description">Description</th>
              <th data-field="Price">Price</th>
              <th data-field="is_active">Active</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(
            (product)=>(
                <tr>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.is_active ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
                </tr>
            )
          )}
        </tbody>
      </table>
      </li>
    )
  }
}
