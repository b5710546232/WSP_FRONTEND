import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
export default class CartModal extends Component {
  render() {
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'>Cart 1</Button>
        }
        >
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
        <Button wave="light">Pay</Button>
      </Modal>
    )
  }
}
