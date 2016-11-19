import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadLogoList} from '../../actions/LogoAction'
import {connect} from 'react-redux'

class SelectLogoModal extends Component {
  componentDidMount(){
    this.props.loadLogoList(localStorage.token)
  }
  setLogo(e,path){
    e.preventDefault()
    this.props.selectLogo(path)
  }
  onUpload(e){
    e.preventDefault()
    let image = e.target.files[0]
    var reader = new FileReader();
    let path = ''
    reader.onload = (e)=>{
      path=e.target.result
      this.props.selectLogo(path)
    }
    reader.readAsDataURL(image);   
  }
  render(){
    return (
      <Modal
        header="Select Logo Style"
        trigger={
          <Button>Select Logo</Button>
        }
      >
        <div className="row">
          <form>
            <div className="file-field input-field">
              <div className="btn" >
                <span>Upload your logo</span>
                <input type="file" id="logo-upload" onChange={(e)=>this.onUpload(e)}/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {
            this.props.logo.map((logo)=>(
              <div className="col s12 m3 modal-close" onClick={(e)=>this.setBottle(e,logo.image)}>
                <img className="responsive-img" src={logo.image}></img>
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
    loadLogoList: (token) =>(
      dispatch(loadLogoList(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectLogoModal)
