import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import StatisticProduct from './StatisticProduct'
import StatisticCategory from './StatisticCategory'
import StatisticMoney from './StatisticMoney'
import StatisticPayment from './StatisticPayment'
import StatisticOrder from './StatisticOrder'
import StatisticShipping from './StatisticShipping'
import StatisticAddress from './StatisticAddress'
import {loadProduct,loadMoneyProduct,loadUserShiping,loadUserPayment,loadUserOrder} from '../../../actions/StatisticAction'
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie,Cell} from 'recharts'

class StatisticBody extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadProduct()
    this.props.loadMoneyProduct()
    this.props.loadUserShiping()
    this.props.loadUserPayment()
    this.props.loadUserOrder()
  }
  componentWillUpdate(){
    if (this.props.admin.product.length>0){
      this.statistic = this.props.statistic.product
      this.colors = []
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
    if (this.props.admin.user.length>0){
      console.log('debug','adsdsadsadsa');
      this.statistic3 = this.props.statistic.userOrder
      this.colors = []
      for(let i=0;i<this.statistic3.length;i++){
        this.statistic3[i].name = this.props.admin.user.find((user)=>(user.id==this.statistic3[i].user)).username
        this.statistic3[i].value = this.statistic3[i].amount
        this.colors.push(this.getRandomColor())
      }
      this.statistic4 = this.props.statistic.userPayment
      this.colors = []
      for(let i=0;i<this.statistic4.length;i++){
        this.statistic4[i].name = this.props.admin.user.find((user)=>(user.id==this.statistic4[i].user)).username
        this.statistic4[i].value = this.statistic4[i].amount
        this.colors.push(this.getRandomColor())
      }
      this.statistic5 = this.props.statistic.userShipping
      this.colors = []
      for(let i=0;i<this.statistic5.length;i++){
        this.statistic5[i].name = this.props.admin.user.find((user)=>(user.id==this.statistic5[i].user)).username
        this.statistic5[i].value = this.statistic5[i].amount
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
    return(
      <li className="white">
        <div className="collapsible-header white">Statistic</div>
        <div className="collapsible-body white center-align">
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

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content">
                <div className="row center">
                  <h5>Top Earn Rank</h5>
                  {
                    this.statistic2?
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

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content center-align">
                <div className="row">
                  <h5>Top Order User</h5>
                </div>
                <div className="row center-align ">
                  <PieChart width={300} height={300} className="center-align">
                    <Pie isAnimationActive={true} data={this.statistic3} cx={120} cy={150} outerRadius={90} fill="#8884d8" label>
                      {this.statistic3!==undefined ?
                        this.statistic3.map((entry, index) => <Cell key={index} fill={this.colors[index % this.colors.length]} />)
                        : <span></span>
                      }
                    </Pie>
                    <Tooltip/>
                  </PieChart>
                </div>
              </div>

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content">
                <div className="row center">
                  <h5>Top Order User Rank</h5>
                  {
                    this.statistic3?
                      <table className="centered responsive-table highlight">
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.statistic3.sort((stat1,stat2)=>(stat2.value-stat1.value)).slice(0,5).map((stat,index)=>(
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

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content center-align">
                <div className="row">
                  <h5>Top Paid User</h5>
                </div>
                <div className="row center-align ">
                  <PieChart width={300} height={300} className="center-align">
                    <Pie isAnimationActive={true} data={this.statistic4} cx={120} cy={150} outerRadius={90} fill="#8884d8" label>
                      {this.statistic4!==undefined ?
                        this.statistic4.map((entry, index) => <Cell key={index} fill={this.colors[index % this.colors.length]} />)
                        : <span></span>
                      }
                    </Pie>
                    <Tooltip/>
                  </PieChart>
                </div>
              </div>

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content">
                <div className="row center">
                  <h5>Top Paid User Rank</h5>
                  {
                    this.statistic4?
                      <table className="centered responsive-table highlight">
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.statistic4.sort((stat1,stat2)=>(stat2.value-stat1.value)).slice(0,5).map((stat,index)=>(
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

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content center-align">
                <div className="row">
                  <h5>Top Shipped User</h5>
                </div>
                <div className="row center-align ">
                  <PieChart width={300} height={300} className="center-align">
                    <Pie isAnimationActive={true} data={this.statistic5} cx={120} cy={150} outerRadius={90} fill="#8884d8" label>
                      {this.statistic5!==undefined ?
                        this.statistic5.map((entry, index) => <Cell key={index} fill={this.colors[index % this.colors.length]} />)
                        : <span></span>
                      }
                    </Pie>
                    <Tooltip/>
                  </PieChart>
                </div>
              </div>

            </div>
          </div>
          <div className="col s12 m5 l5">
            <div className="card">
              <div className="card-content">
                <div className="row center">
                  <h5>Top Shipped User Rank</h5>
                  {
                    this.statistic5?
                      <table className="centered responsive-table highlight">
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.statistic5.sort((stat1,stat2)=>(stat2.value-stat1.value)).slice(0,5).map((stat,index)=>(
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

            </div>
          </div>
          {/* <ul className="collapsible popout white"  data-collapsible="accordion">
            <li>
            <div className="collapsible-header">Statistic of Products</div>
            <div className="collapsible-body white">
            <StatisticProduct/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Category</div>
            <div className="collapsible-body white">
            <StatisticCategory/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Money Product</div>
            <div className="collapsible-body white">
            <StatisticMoney/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Payment</div>
            <div className="collapsible-body white">
            <StatisticPayment/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Shipping</div>
            <div className="collapsible-body white">
            <StatisticShipping/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Order</div>
            <div className="collapsible-body white">
            <StatisticOrder/>
            </div>
            </li>
            <li>
            <div className="collapsible-header">Statistic of Address</div>
            <div className="collapsible-body white">
            <StatisticAddress/>
            </div>
            </li>
          </ul> */}
        </div>
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
    loadMoneyProduct:()=>(dispatch(loadMoneyProduct())),
    loadUserShiping:()=>dispatch(loadUserShiping()),
    loadUserPayment:()=>dispatch(loadUserPayment()),
    loadUserOrder:()=>dispatch(loadUserOrder())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticBody)
