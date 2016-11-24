import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie} from 'recharts'
import {loadMoneyProduct} from '../../../actions/StatisticAction'

class StatisticMoney extends Component {

  componentDidMount(){
    this.props.loadMoneyProduct()
  }

  componentWillUpdate(){
    this.statistic_product = this.props.statistic.moneyProduct
    for(let i=0;i<this.statistic_product.length;i++){
        this.statistic_product[i].name = this.props.products.find((product)=>(product.id==this.statistic_product[i].product)).name
        this.statistic_product[i].value = this.statistic_product[i].amount
    }
  }

  render() {
    return(
      // <LineChart width={780} height={300} data={this.statistic_product}
      //       margin={{top: 20, right: 100, left: 10, bottom: 5}}>
      //  <XAxis label="product name" dataKey="name"/>
      //  <YAxis label="amount"/>
      //  <CartesianGrid strokeDasharray="3 3"/>
      //  <Tooltip/>
      //  <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      // </LineChart>
      <PieChart width={730} height={250}>
        <Pie isAnimationActive={true} data={this.statistic_product} cx={200} cy={100} outerRadius={80} fill="#8884d8" label/>
        <Tooltip/>
      </PieChart>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
      loadMoneyProduct:()=>(dispatch(loadMoneyProduct()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticMoney)
