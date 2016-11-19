import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadBottleList} from '../../actions/BottleAction'
import {connect} from 'react-redux'

class SelectBannerModal extends Component {
  componentDidMount(){
    this.props.loadBannerList(localStorage.token)
  }
  setBanner(e,path){
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
        <div className="row">

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
    loadBannerList: (token) =>(
      dispatch(loadBannerList(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectBannerModal)
