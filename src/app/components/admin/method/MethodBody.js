import React, { Component } from 'react'

class MethodBody extends Component {
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
        <div className="collapsible-header">Payment Method</div>
        <div className="collapsible-body">
          <div>
            Edit Here
          </div>
        </div>
      </li>
    )
  }
}

export default MethodBody
