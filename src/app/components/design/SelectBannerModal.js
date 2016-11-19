import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadBannerList} from '../../actions/BannerAction'
import {connect} from 'react-redux'

class SelectBannerModal extends Component {
  componentDidMount(){
    this.props.loadBannerList(localStorage.token)
  }
  setBanner(e,path){
    e.preventDefault()
    this.props.selectBanner(path)
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
          {
            this.props.banner.map((banner)=>(
              <div className="col s12 m3" onClick={(e)=>this.setBanner(e,banner.image)}>
                <img className="responsive-img" src={banner.image}></img>
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
    loadBannerList: (token) =>(
      dispatch(loadBannerList(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectBannerModal)
