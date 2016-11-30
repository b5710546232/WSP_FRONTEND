import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadBottleList} from '../../actions/BottleAction'
import {connect} from 'react-redux'

class SelectBottleModal extends Component {
  componentDidMount(){
    this.props.loadBottleList(localStorage.token)
  }
  setBottle(e,path){
    e.preventDefault()
    this.props.selectBottle("https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+path)
  }
  render(){
    return (
      <Modal
        header="Select Bottle Style"
        trigger={
          <Button>Select Bottle Type</Button>
        }
      >
        <div className="row">
          {
            this.props.bottle.map((bottle,index)=>(
              <div key={index} className="col s12 m3 modal-close" onClick={(e)=>this.setBottle(e,bottle.img)}>
                <img crossOrigin="Anonymous" id={bottle.img} className="responsive-img light-blue" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+bottle.img}></img>
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
    loadBottleList: (token) =>(
      dispatch(loadBottleList(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectBottleModal)
