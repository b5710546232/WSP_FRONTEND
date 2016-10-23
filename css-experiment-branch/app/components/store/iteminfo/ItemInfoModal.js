import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
import '../../../../dist/scss/info.scss'
export default class ItemInfoModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <a>9.00฿</a>
        }>
        <div>
          <img className="item-preview" src="media/images/3.png"/>
          <div className="section ">
            <h3>Water 9฿</h3>
            <p className="flow-text">
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
              This fucking good water blah blah blah blah
            </p>
            <Button>Add to cart</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
