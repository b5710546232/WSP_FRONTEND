import React, { Component } from 'react'
import {Col,Card,CardTitle } from 'react-materialize'
import ItemInfoModal from '../iteminfo/ItemInfoModal'
export default class Filter extends Component {
  render() {
    return (
      <Col s={12} m={5} l={4}>
        <Card className='small'
          header={<CardTitle image='media/images/2.png'>Nature Drink</CardTitle>}
          actions={<ItemInfoModal/>}>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </Card>
      </Col>
    )
  }
}
