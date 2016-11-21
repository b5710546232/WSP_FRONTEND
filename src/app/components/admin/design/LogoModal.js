import React, { Component } from 'react'
import {Modal,Button,Input} from 'react-materialize'
import {connect} from 'react-redux'
import {addLogo,deleteLogo,reactiveLogo} from '../../../actions/AdminAction'
import {uploadImage} from '../../../aws/aws.js'

class LogoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add : false
    }
  }
  onRequest(e) {
    e.preventDefault()
    this.setState({
      add:true
    })
  }
  onUpload(e){
    e.preventDefault()
    let image = e.target.files[0]
    let dotData = image.name.split('.')[image.name.split('.').length-1]
    let name= "logo"+(this.props.admin.logo.length+1)+'.'+dotData
    uploadImage(name,image)
    let data = {
      name : name,
      img : name
    }
    this.props.addLogo(data,localStorage.token)
  }
  onDeactive(e,id){
    e.preventDefault()
    this.props.deleteLogo(id,localStorage.token)
  }
  onReactive(e,id){
    e.preventDefault()
    this.props.reactiveLogo(id,localStorage.token)
  }

  render(){
    let margin = {
      margin:"2px"
    }
    return (
      <Modal
        header="Manage Logo"
        trigger={
          <Button>Manage Logo</Button>
        }
      >
        <div className="row">
          {
            this.props.admin.logo.map((logo)=>(
              <div className="col s12 m5" style={margin} >
                <div className="row center">
                  <img className="responsive-img light-blue" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+logo.img}></img>
                </div>
                <div className="row center">
                  {
                    logo.is_active?
                      <a className="btn-floating btn waves-effect waves-light red" onClick={(e)=>this.onDeactive(e,logo.id)}><i className="material-icons small">delete</i></a>
                    :
                    <a className="btn-floating btn waves-effect waves-light green" onClick={(e)=>this.onReactive(e,logo.id)}><i className="material-icons small">done</i></a>
                  }
                </div>
              </div>
            ))
          }
          <div className="col s12 m5 center"  style={margin}>
            <div className="row">
              {
                this.state.add ?
                  <div className="file-field input-field">
                    <div className="btn" >
                      <span>Upload Logo</span>
                      <input type="file" id="logo-upload" onChange={(e)=>this.onUpload(e)}/>
                    </div>
                  </div>
                :
                <Button onClick={(e)=>this.onRequest(e)}>Add Logo</Button>
              }
            </div>
          </div>
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
    addLogo: (data,token) => (
      dispatch(addLogo(data,token))
    ),
    deleteLogo: (id,token)=>(
      dispatch(deleteLogo(id,token))
    ),
    reactiveLogo: (id,token)=>(
      dispatch(reactiveLogo(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogoModal)
