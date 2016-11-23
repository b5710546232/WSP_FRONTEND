import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import {loadAddress} from '../../../actions/StatisticAction'

class StatisticAddress extends Component {

  componentDidMount(){
    this.props.loadAddress()
  }

  render() {
    return(
      <LineChart width={780} height={300} data={this.props.statistic.address}
            margin={{top: 20, right: 100, left: 10, bottom: 5}}>
       <XAxis label="province" dataKey="province"/>
       <YAxis label="amount"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      </LineChart>
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
