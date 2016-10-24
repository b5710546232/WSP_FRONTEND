import React, { Component } from 'react'
import {Col,Card,CardTitle } from 'react-materialize'
import ItemInfoModal from '../iteminfo/ItemInfoModal'
export default class Filter extends Component {
  render() {
    return (
      <Col s={12} m={5} l={4}>
        <Card className='small hoverable'
          header={<CardTitle
            image='src/assets/media/images/2.png'>{this.props.name}
          </CardTitle>}
          actions={<ItemInfoModal
            name={this.props.name}
            description={this.props.description}
            price={this.props.price}
            image='src/assets/media/images/2.png'/>}>
          {this.props.description}
        </Card>
      </Col>
    )
  }
}
