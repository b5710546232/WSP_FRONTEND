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
    // console.log(this.props.admin.order,"list order");
    // console.log(this.props,admin.item_line);

    return this.props.admin.order !== nextProps
  }

  updateOnClick(e){
    e.preventDefault()
    this.props.loadOrder(localStorage.token)
  }

  render() {
    return(
      <li className="white">
        <div className="collapsible-header white">Order</div>
        <div className="collapsible-body white">
          <ul className="collapsible popout white"  data-collapsible="accordion">
              <li>
                <div className="collapsible-header" onClick={(e)=>this.updateOnClick(e)}>Awaiting payment</div>
                <div className="collapsible-body white">
                    <OrderList
                      orderList={this.props.admin.order.filter((order)=>order.transfer_slip===''&&!order.is_paid)}
                      />
                </div>
              </li>
              <li>
                <div className="collapsible-header" onClick={(e)=>this.updateOnClick(e)}>Awaiting confirmation</div>
                <div className="collapsible-body white">
                  <OrderList
                    orderList={this.props.admin.order.filter((order)=>String(order.transfer_slip)!==""&&!order.is_paid)}
                    />
                </div>
              </li>
              <li>
                <div className="collapsible-header" onClick={(e)=>this.updateOnClick(e)}>Awaiting shipment</div>
                <div className="collapsible-body white">
                  <OrderList
                    orderList={this.props.admin.order.filter((order)=>order.is_paid)}
                    />
                </div>
              </li>
              <li>
                <div className="collapsible-header" onClick={(e)=>this.updateOnClick(e)}>Awaiting delivery</div>
                <div className="collapsible-body white">
                  <OrderList
                    orderList={this.props.admin.order.filter((order)=>order.is_shipped)}
                    />
                </div>
              </li>
              <li>
                <div className="collapsible-header" onClick={(e)=>this.updateOnClick(e)}>Done</div>
                <div className="collapsible-body white">
                  <OrderList
                    orderList={this.props.admin.order.filter((order)=>order.status.split(" ")[0]==='Accept')}
                    />
                </div>
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
