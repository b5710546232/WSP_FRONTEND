import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import {loadProduct} from '../../../actions/StatisticAction'

class StatisticShipping extends Component {

  componentDidMount(){
    this.props.loadProduct()
  }


  render() {
    return(
      // <LineChart width={780} height={300} data={this.props.statistic.product}
      //       margin={{top: 20, right: 100, left: 10, bottom: 5}}>
      //  <XAxis label="product name" dataKey="product"/>
      //  <YAxis label="amount"/>
      //  <CartesianGrid strokeDasharray="3 3"/>
      //  <Tooltip/>
      //  {/* <Legend /> */}
      //  {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/> */}
      //  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      //  <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
      // </LineChart>
      <div></div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
      loadProduct:()=>(dispatch(loadProduct()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticShipping)
