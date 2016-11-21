import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import {loadUserPayment} from '../../../actions/StatisticAction'

class StatisticPayment extends Component {

  componentDidMount(){
    this.props.loadUserPayment()
  }

  componentWillUpdate(){
    this.statistic = this.props.statistic.userPayment
    for(let i=0;i<this.statistic.length;i++){
        this.statistic[i].username = this.props.admin.user.find((user)=>(user.id==this.statistic[i].user)).username
    }
  }

  render() {
    return(
      <LineChart width={780} height={300} data={this.statistic}
            margin={{top: 20, right: 100, left: 10, bottom: 5}}>
       <XAxis label="username" dataKey="username"/>
       <YAxis label="amount"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       {/* <Legend /> */}
       {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/> */}
       {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
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
      loadUserPayment:()=>(dispatch(loadUserPayment()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticPayment)
