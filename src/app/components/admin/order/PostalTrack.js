import {confirmPayment,unconfirmPayment} from '../../../actions/AdminAction'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row,Col} from 'react-materialize'

class PostalTrack extends Component{
  render(){
    return (
      <Modal
        header="Update Postal Track"
        trigger={<Button waves="light">Update Postal Track</Button>}
        >
        <form>
          <Input s={12} type="text" label="Postal Track" defaultValue={this.props.track? this.props.track:""}></Input>
          <Row>
            <div className="center">
                <Button waves="light">Update</Button>
            </div>
            <Col className="right">
              <a className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></a>
            </Col>
          </Row>
        </form>
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
export default connect(mapStateToProps,mapDispatchToProps)(PostalTrack)
