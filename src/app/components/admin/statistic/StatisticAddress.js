import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie} from 'recharts'
import {loadAddress} from '../../../actions/StatisticAction'

class StatisticAddress extends Component {

  componentDidMount(){
    this.props.loadAddress()
  }

  componentWillUpdate(){
    this.statistic = this.props.statistic.address
    for(let i=0;i<this.statistic.length;i++){
        this.statistic[i].name = this.statistic[i].province
        this.statistic[i].value = this.statistic[i].amount
    }
  }

  render() {
    return(
      // <LineChart width={780} height={300} data={this.props.statistic.address}
      //       margin={{top: 20, right: 100, left: 10, bottom: 5}}>
      //  <XAxis label="province" dataKey="name"/>
      //  <YAxis label="amount"/>
      //  <CartesianGrid strokeDasharray="3 3"/>
      //  <Tooltip/>
      //  <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      // </LineChart>
      <PieChart width={730} height={250}>
        <Pie isAnimationActive={true} data={this.statistic} cx={200} cy={100} outerRadius={80} fill="#8884d8" label/>
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
      loadAddress:()=>(dispatch(loadAddress()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticAddress)
