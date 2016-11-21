import React, { Component } from 'react'
import {Modal,Button,Input} from 'react-materialize'
import {connect} from 'react-redux'
import {addBottle,deleteBottle,reactiveBottle} from '../../../actions/AdminAction'

class BottleModal extends Component {

  render(){
    return (
      <Modal
        header="Manage Bottle"
        trigger={
          <Button>Manage Bottle</Button>
        }
      >
        <div className="row">
          {
            this.props.admin.bottle.map((bottle)=>(
              <div className="col s12 m6" >
                <img className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+bottle.image}></img>

              </div>
            ))
          }
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BottleModal)
