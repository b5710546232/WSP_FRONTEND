import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'

export default class SelectBottleModal extends Component {
  setBottle(e){
    e.preventDefault()
    this.props.selectBottle("src/assets/media/images/1.png")
  }
  render(){
    return (
      <Modal
        header="Select Bottle Style"
        trigger={
          <Button>Select Bottle Type</Button>
        }
      >
        <h1>Test</h1>
        <Button onClick={(e)=>this.setBottle(e)}>AAA</Button>
      </Modal>
    )
  }
}
