import React, { Component } from 'react'

export default class CartModal extends Component {
  render() {
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'><Icon left>shopping_cart</Icon>Cart<div class=chip>num of item in cart</div></Button>
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
