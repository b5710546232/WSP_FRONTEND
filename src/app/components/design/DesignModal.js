import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadDesignList,deleteDesign,submitDesign,deSubmitDesign} from '../../actions/DesignAction'
import {connect} from 'react-redux'

class DesignModal extends Component {
  componentDidMount(){
    this.props.loadDesignList(localStorage.token)
  }
  onDeactive(e,id){
    e.preventDefault()
    this.props.deleteDesign(id,localStorage.token)
  }
  onSubmit(e,id){
    e.preventDefault()
    this.props.submitDesign(id,localStorage.token)
  }
  onDeSubmit(e,id){
    e.preventDefault()
    this.props.deSubmitDesign(id,localStorage.token)
  }
  render(){
    return (
      <Modal
        header="Saved Design"
        trigger={
          <Button>View Saved Design</Button>
        }
      >
        <div className="row">
          {
            this.props.design.filter((design)=>(design.is_active)).map((design)=>(
              <div className="col s12 m6" >
                <img className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+design.image}></img>
                <div className="row center">
                  {!design.is_request?
                    <div>
                      <Button onClick={(e)=>this.onSubmit(e,design.id)}>Request</Button>
                    </div>
                    :<div>
                      {design.is_confirm?
                        <div className="row center">
                          <span>Request is Confirm!</span>
                          <Button  onClick={(e)=>this.onSubmit(e,design.id)}>Request</Button>
                        </div>:
                        <div className="row center">
                          <div className="row center">Pending</div>
                          <div className="row center">
                            <Button  onClick={(e)=>this.onDeSubmit(e,design.id)}>Cancel</Button>
                          </div>
                        </div>
                      }
                    </div>
                  }
                </div>
                <div className="row center">
                  <a className="btn-floating btn waves-effect waves-light red" onClick={(e)=>this.onDeactive(e,design.id)}><i className="material-icons small">delete</i></a>
                </div>
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
    loadDesignList: (token) =>(
      dispatch(loadDesignList(token))
    ),
    deleteDesign: (id,token) =>(
      dispatch(deleteDesign(id,token))
    ),
    submitDesign: (id,token) =>(
      dispatch(submitDesign(id,token))
    ),
    deSubmitDesign: (id,token) =>(
      dispatch(deSubmitDesign(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DesignModal)
