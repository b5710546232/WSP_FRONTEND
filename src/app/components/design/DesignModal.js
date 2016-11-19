import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
import {loadDesignList,deleteDesign,submitDesign,deSubmitDesign} from '../../actions/DesignAction'
import {connect} from 'react-redux'

class DesignModal extends Component {
  componentDidMount(){
    this.props.loadDesignList(localStorage.token)
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
            this.props.design.map((design)=>(
              <div className="col s12 m6" >
                <img className="responsive-img" src={"https://s3.ap-northeast-2.amazonaws.com/naturedrink-seoul/"+design.image}></img>
                <div className="row center">
                  {!design.is_request?
                    <div>
                      <Button>Request</Button>
                    </div>
                    :<div>
                      {design.is_confirm?
                        <span>Request is Confirm!</span>:
                        <div>
                          <span>Pending</span>
                          <Button>Cancel</Button>
                        </div>
                      }
                    </div>
                  }
                </div>
                <div className="row center">
                  <a className="btn-floating btn waves-effect waves-light red"><i className="material-icons small">delete</i></a>
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
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DesignModal)
