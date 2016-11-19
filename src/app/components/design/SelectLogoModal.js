import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'

export default class SelectLogoModal extends Component {
  selectLogo(e){
    e.preventDefault()
    this.props.selectBottle("src/assets/media/images/1.png")
  }
  render(){
    return (
      <Modal
        header="Select Logo Style"
        trigger={
          <Button>Select Logo</Button>
        }
      >
        <h1>Test</h1>
        <Button onClick={(e)=>this.setLogo(e)}>AAA</Button>
      </Modal>
    )
  }
}
