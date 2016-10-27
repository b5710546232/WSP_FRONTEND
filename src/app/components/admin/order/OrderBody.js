import React, { Component } from 'react'
import {connect} from 'react-redux'

class OrderBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  render() {
    return(
      <li>
        <div className="collapsible-header">Order</div>
        <div className="collapsible-body">
          <div>
            Edit Here
          </div>
        </div>
      </li>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderBody)
