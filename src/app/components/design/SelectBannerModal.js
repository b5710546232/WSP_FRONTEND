import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'

export default class SelectBannerModal extends Component {
  setBanner(e){
    e.preventDefault()
    this.props.selectBottle("src/assets/media/images/1.png")
  }
  render(){
    return (
      <Modal
        header="Select Banner Style"
        trigger={
          <Button>Select Banner Type</Button>
        }
      >
        <h1>Test</h1>
        <Button onClick={(e)=>this.setBanner(e)}>AAA</Button>
      </Modal>
    )
  }
}
