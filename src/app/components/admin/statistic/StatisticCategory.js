import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import {loadCategory} from '../../../actions/StatisticAction'

class StatisticCategory extends Component {

  componentDidMount(){
    this.props.loadCategory()
  }


  render() {
    return(
      <LineChart width={780} height={300} data={this.props.statistic.category}
            margin={{top: 20, right: 100, left: 10, bottom: 5}}>
       <XAxis label="category name" dataKey="category"/>
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
      loadCategory:()=>(dispatch(loadCategory()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticCategory)
