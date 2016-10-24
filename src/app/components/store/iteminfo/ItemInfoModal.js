import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
import '../../../../assets/scss/info.scss'
export default class ItemInfoModal extends Component {
  render() {
    return (
      <Modal
        trigger={
<<<<<<< HEAD
          <a>{this.props.price}฿</a>
=======
          <a>{this.props.price}</a>
>>>>>>> 371f66e052339a43f8fe403a6805092319d3d138
        }>
        <div>
          <img className="item-preview" src={this.props.image}/>
          <div className="section ">
            <h3>{this.props.name} {this.props.price}฿</h3>
            <p className="flow-text">
              {this.props.description}
            </p>
            <Button>Add to cart</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
