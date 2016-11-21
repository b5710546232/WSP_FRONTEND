import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts'
import {loadMoneyProduct} from '../../../actions/StatisticAction'

class StatisticMoney extends Component {

  componentDidMount(){
    this.props.loadMoneyProduct()
  }

  componentWillUpdate(){
    this.statistic_product = this.props.statistic.moneyProduct
    for(let i=0;i<this.statistic_product.length;i++){
        this.statistic_product[i].product_name = this.props.products.find((product)=>(product.id==this.statistic_product[i].product)).name
    }
  }

  render() {
    return(
      <LineChart width={780} height={300} data={this.statistic_product}
            margin={{top: 20, right: 100, left: 10, bottom: 5}}>
       <XAxis label="product name" dataKey="product_name"/>
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
      loadMoneyProduct:()=>(dispatch(loadMoneyProduct()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticMoney)
