import React, { Component } from 'react'
import {Modal} from '../../../util/react-materialize-yr'
import {Button} from 'react-materialize'
export default class Test extends Component {
  render(){
    return (
      <div className="white">
        <div className="row">
          <h1>Test React Compoent</h1>
          <Modal
            id="example-modal"
            trigger={<Button>A</Button>}
            header="AAA"
          >
            <div>Content</div>
          </Modal>
          </div>
      </div>
    )
  }
}
