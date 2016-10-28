import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderList from './OrderList'

class OrderBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  shouldComponentUpdate(nextProps){
    console.log(this.props.admin.order,"list order");
    // console.log(this.props,admin.item_line);

    return this.props.admin.order !== nextProps
  }

  render() {
    return(
      <li>
        <div className="collapsible-header">Order</div>
        <div className="collapsible-body">
          <ul className="collapsible popout"  data-collapsible="accordion">
              <li>
                <div className="collapsible-header">Awaiting payment</div>
                <div className="collapsible-body">
                    <OrderList/>
                </div>
              </li>
              <li>
                <div className="collapsible-header">Confirm payment</div>
                <div className="collapsible-body white">
                </div>
              </li>
              <li>
                <div className="collapsible-header">Awaiting shipment</div>
                <div className="collapsible-body white"></div>
              </li>
              <li>
                <div className="collapsible-header">Awaiting delivery</div>
                <div className="collapsible-body white"></div>
              </li>
              <li>
                <div className="collapsible-header">Done</div>
                <div className="collapsible-body white"></div>
              </li>
          </ul>
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