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
    this.props.selectBottle(path)
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
            this.props.bottle.map((bottle)=>(
              <div className="col s12 m3" onClick={(e)=>this.setBottle(e,bottle.image)}>
                <img className="responsive-img" src={bottle.image}></img>
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
