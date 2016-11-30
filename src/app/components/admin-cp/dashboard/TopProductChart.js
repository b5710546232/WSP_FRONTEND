import React, { Component } from 'react'
import {connect} from 'react-redux'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie,Cell} from 'recharts'
import {loadProduct,loadMoneyProduct} from '../../../actions/StatisticAction'

class ProductChart extends Component {

  componentDidMount(){
    this.props.loadProduct()
    this.props.loadMoneyProduct()
  }

  componentWillUpdate(){
    if (this.props.admin.product.length>0){
      this.statistic = this.props.statistic.product
      this.colors = []
      console.log(this.props);
      for(let i=0;i<this.statistic.length;i++){
        this.statistic[i].name = this.props.admin.product.find((product)=>(product.id==this.statistic[i].product)).name
        this.statistic[i].value = this.statistic[i].amount
        this.colors.push(this.getRandomColor())
      }
      this.statistic2 = this.props.statistic.moneyProduct
      this.colors = []
      for(let i=0;i<this.statistic2.length;i++){
        this.statistic2[i].name = this.props.admin.product.find((product)=>(product.id==this.statistic2[i].product)).name
        this.statistic2[i].value = this.statistic2[i].amount
        this.colors.push(this.getRandomColor())
      }
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

    return (
      <div>
        <div className="col s12 m5 l5">
          <div className="card">
            <div className="card-content center-align">
              <div className="row">
                <h5>Top Selling Chart</h5>
              </div>
              <div className="row center-align ">
                <div className="valign-wrapper">
                  <div className="valign">
                    <PieChart width={300} height={300} className="center-align" >
                      <Pie isAnimationActive={true} data={this.statistic} cx={120} cy={150} outerRadius={90} fill="#8884d8" label>
                        {this.statistic!==undefined ?
                          this.statistic.map((entry, index) => <Cell key={index} fill={this.colors[index % this.colors.length]}/>)
                          : <span></span>
                        }
                      </Pie>
                      <Tooltip/>
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-action">
              <a href="#">Go to Category & Product </a>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l5">
          <div className="card">
            <div className="card-content">
              <div className="row center">
                <h5>Top Selling Rank</h5>
                {
                  this.statistic?
                    <table className="centered responsive-table highlight">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Product</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.statistic.sort((stat1,stat2)=>(stat2.value-stat1.value)).slice(0,5).map((stat,index)=>(
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{stat.name}</td>
                              <td>{stat.value}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>:<div>Information Not Show</div>
                }
              </div>
            </div>
            <div className="card-action">
              <a href="#">Go to Category & Product </a>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l5">
          <div className="card">
            <div className="card-content center-align">
              <div className="row">
                <h5>Top Earn Chart</h5>
              </div>
              <div className="row center-align ">
                <PieChart width={300} height={300} className="center-align">
                  <Pie isAnimationActive={true} data={this.statistic2} cx={120} cy={150} outerRadius={90} fill="#8884d8" label>
                    {this.statistic2!==undefined ?
                      this.statistic2.map((entry, index) => <Cell key={index} fill={this.colors[index % this.colors.length]} />)
                      : <span></span>
                    }
                  </Pie>
                  <Tooltip/>
                </PieChart>
              </div>
            </div>
            <div className="card-action">
              <a href="#">Go to Category & Product </a>
            </div>
          </div>
        </div>
        <div className="col s12 m5 l5">
          <div className="card">
            <div className="card-content">
              <div className="row center">
                <h5>Top Earn Rank</h5>
                {
                  this.statistic?
                    <table className="centered responsive-table highlight">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Product</th>
                          <th>Earn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.statistic2.sort((stat1,stat2)=>(stat2.value-stat1.value)).slice(0,5).map((stat,index)=>(
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{stat.name}</td>
                              <td>{stat.value} ฿</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>:<div>Information Not Show</div>
                }
              </div>
            </div>
            <div className="card-action">
              <a href="#">Go to Category & Product </a>
            </div>
          </div>
        </div>
      </div>

)
}
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProduct:()=>(dispatch(loadProduct())),
    loadMoneyProduct:()=>(dispatch(loadMoneyProduct()))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductChart)
