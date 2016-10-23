import React, { Component } from 'react'
import { CollapsibleItem,Row,Col } from 'react-materialize'
export default class PostalItem extends Component {
  render() {
    productList = []
    this.props.products.forEach(function(product){
      productList.push(<Row>
        <Col s={6} m={6} className="thin">
          product.name
        </Col>
        <Col s={6} m={6} className="thin">
          product.quantity
        </Col>
      </Row>)
    })
    return (
      <CollapsibleItem header={this.props.order} icon={this.props.icon}>
        <Row>
          <Col s={12} m={6}>
            <h5 className="bold">Order {this.props.track}</h5>
          </Col>
          <Col s={12} m={6}>
            <h5 className="bold">{this.props.status}</h5>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <h5 className="bold">Product List</h5>
            {productList}
          </Col>
          <Col s={12} m={6}>
            <h6>last update : {this.props.lastupdate}</h6>
          </Col>
        </Row>
      </CollapsibleItem>
    )
  }
}
