import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
// import {loadProduct,loadCategory,loadMoneyProduct,loadUserPayment,loadUserOrder,loadUserShiping,loadAddress} from '../../../actions/StatisticAction'
import {LineChart,Line,CartesianGrid,XAxis,YAxis} from 'recharts'
import StatisticProduct from './StatisticProduct'
import StatisticCategory from './StatisticCategory'
import StatisticMoney from './StatisticMoney'
import StatisticPayment from './StatisticPayment'
import StatisticOrder from './StatisticOrder'
import StatisticShipping from './StatisticShipping'
import StatisticAddress from './StatisticAddress'

class StatisticBody extends Component {

  constructor(props){
    super(props)
    this.state = {
      data : [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]
    }
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    // this.props.loadCategory()
    // this.props.loadMoneyProduct()
    // this.props.loadUserPayment()
    // this.props.loadUserOrder()
    // this.props.loadUserShiping()
    // this.props.loadAddress()
  }

  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }

  render() {
    console.log(this.props.statistic.category,"category");
    console.log(this.props.statistic.moneyProduct,"moneyProduct");
    console.log(this.props.statistic.userPayment,"userPayment");
    console.log(this.props.statistic.userOrder,"userOrder");
    console.log(this.props.statistic.userShipping,"userShipping");
    console.log(this.props.statistic.address,"address");
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
            <div className="collapsible-header">Statistic of Money</div>
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
