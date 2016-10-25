import React, { Component } from 'react'
import {Button,Table} from 'react-materialize'
export default class CartInfo extends Component {
  render(){
    return (
      <div >
        <Table>
          <thead>
            <tr>
              <th data-field="id">Product Name</th>
              <th data-field="name">Quantity</th>
              <th data-field="price">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Bottle A</td>
              <td>9</td>
              <td>9.99฿</td>
            </tr>
          </tbody>
        </Table>
        <Button waves="light" onClick={this.props.onPay}>Pay</Button>
      </div>
    )
  }
}
