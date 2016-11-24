import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie,Cell} from 'recharts'
import {loadMoneyProduct} from '../../../actions/StatisticAction'

class StatisticMoney extends Component {

  componentDidMount(){
    this.props.loadMoneyProduct()
  }

  componentWillUpdate(){
    this.statistic = this.props.statistic.moneyProduct
    this.colors = []
    for(let i=0;i<this.statistic.length;i++){
        this.statistic[i].name = this.props.products.find((product)=>(product.id==this.statistic[i].product)).name
        this.statistic[i].value = this.statistic[i].amount
        this.colors.push(this.getRandomColor())
    }
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return(
      <PieChart width={730} height={250}>
        <Pie isAnimationActive={true} data={this.statistic} cx={200} cy={100} outerRadius={80} fill="#8884d8" label>
        {this.statistic!==undefined ? 
          this.statistic.map((entry, index) => <Cell fill={this.colors[index % this.colors.length]}/>)
          : <span></span>
        }
        </Pie>
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
