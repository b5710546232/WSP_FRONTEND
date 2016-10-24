import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
import '../../../../assets/scss/info.scss'
export default class ItemInfoModal extends Component {
  addToCart(){
    let data = {
      product:"s"
    }
  }
  render() {
    return (
      <Modal
        trigger={
          <a>{this.props.price}฿</a>
        }>
        <div>
          <img className="item-preview" src={this.props.image}/>
          <div className="section ">
            <h3>{this.props.name} {this.props.price}฿</h3>
            <p className="flow-text">
              {this.props.description}
            </p>
            <Button onClick = {()=>this.addToCart()} >Add to cart</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
