import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'

class StatisticBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }
  componentDidUpdate(){


  }
  render() {
    return(
      <li>
        <div className="collapsible-header">Statistic</div>
        <div className="collapsible-body white">
          <table className="table-responsive white">
            Hello this space for make statisctic
          </table>
        </div>
      </li>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(StatisticBody)
