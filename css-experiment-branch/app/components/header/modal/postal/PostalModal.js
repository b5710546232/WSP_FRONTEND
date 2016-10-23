import React, { Component } from 'react'
import PostalItem from './PostalItem'
import {Modal,Collapsible,Button,Icon } from 'react-materialize'
export default class PostalModal extends Component {
  render() {
    return (
      <Modal
        header='Modal Header'
        trigger={
          <Button waves='light'>Postal<Icon left>navigation</Icon></Button>
        }
        >
        <Collapsible popout>
          {//Postal Soon...}
        </Collapsible>
      </Modal>
    )
  }
}
