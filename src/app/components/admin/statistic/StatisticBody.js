import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {loadProduct,loadCategory,loadMoneyProduct,loadUserPayment,loadUserOrder,loadUserShiping,loadAddress} from '../../../actions/StatisticAction'
import {LineChart} from 'react-chartjs'

class StatisticBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadProduct()
    this.props.loadCategory()
    this.props.loadMoneyProduct()
    this.props.loadUserPayment()
    this.props.loadUserOrder()
    this.props.loadUserShiping()
    this.props.loadAddress()
    // this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }
  componentDidUpdate(){


  }
  render() {
    console.log(this.props.statistic.product,"product_statistic");
    console.log(this.props.statistic.category,"category");
    console.log(this.props.statistic.moneyProduct,"moneyProduct");
    console.log(this.props.statistic.userPayment,"userPayment");
    console.log(this.props.statistic.userOrder,"userOrder");
    console.log(this.props.statistic.userShipping,"userShipping");
    console.log(this.props.statistic.address,"address");
    return(
      <li>
        <div className="collapsible-header">Statistic</div>
        <div className="collapsible-body white">
          <table className="table-responsive white">

          </table>
        </div>
        <div><LineChart data={this.props.statistic.product} /></div>
      </li>

    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct:()=>(dispatch(loadProduct())),
    loadCategory:()=>(dispatch(loadCategory())),
    loadMoneyProduct:()=>(dispatch(loadMoneyProduct())),
    loadUserPayment:()=>(dispatch(loadUserPayment())),
    loadUserOrder:()=>(dispatch(loadUserOrder())),
    loadUserShiping:()=>(dispatch(loadUserShiping())),
    loadAddress:()=>(dispatch(loadAddress()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticBody)
