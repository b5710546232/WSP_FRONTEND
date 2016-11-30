import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductChart from './dashBoard/TopProductChart'
import {loadUser,loadOrder,loadAddress,loadProduct,loadItemLine,loadCategory,loadMethod} from '../../actions/AdminAction'

class DashBoard extends Component {

  render() {

    return (
      <div >
        <div className="row center">
          <ProductChart/>
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

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)
