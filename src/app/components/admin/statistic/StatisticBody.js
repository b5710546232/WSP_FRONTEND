import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis} from 'recharts'
import StatisticProduct from './StatisticProduct'
import StatisticCategory from './StatisticCategory'
import StatisticMoney from './StatisticMoney'
import StatisticPayment from './StatisticPayment'
import StatisticOrder from './StatisticOrder'
import StatisticShipping from './StatisticShipping'
import StatisticAddress from './StatisticAddress'

class StatisticBody extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }

  render() {
    return(
      <li className="white">
        <div className="collapsible-header white">Statistic</div>
        <div className="collapsible-body white">
          <ul className="collapsible popout white"  data-collapsible="accordion">
          <li>
            <div className="collapsible-header">Statistic of Products</div>
            <div className="collapsible-body white">
                <StatisticProduct/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Category</div>
            <div className="collapsible-body white">
                <StatisticCategory/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Money Product</div>
            <div className="collapsible-body white">
                <StatisticMoney/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Payment</div>
            <div className="collapsible-body white">
                <StatisticPayment/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Shipping</div>
            <div className="collapsible-body white">
                <StatisticShipping/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Order</div>
            <div className="collapsible-body white">
                <StatisticOrder/>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Statistic of Address</div>
            <div className="collapsible-body white">
                <StatisticAddress/>
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
export default connect(mapStateToProps,mapDispatchToProps)(StatisticBody)
