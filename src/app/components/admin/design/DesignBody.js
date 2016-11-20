import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {loadDesign,loadBottle,loadLogo,loadBanner} from '../../../actions/AdminAction'
class DesignBody extends Component {
  componentDidMount(){
    this.props.loadDesign(localStorage.token)
    this.props.loadBottle(localStorage.token)
    this.props.loadBanner(localStorage.token)
    this.props.loadLogo(localStorage.token)

    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  render() {
    return(
      <li>
        <div className="collapsible-header">Design</div>
        <div className="collapsible-body white">
          <table className="table-responsive white">
            Hello this space for make design
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
  return {
    loadDesign: (token)=>(
      dispatch(loadDesign(token))
    ),
    loadBanner: (token)=>(
      dispatch(loadBanner(token))
    ),
    loadBottle: (token)=>(
      dispatch(loadBottle(token))
    ),
    loadLogo: (token)=>(
      dispatch(loadLogo(token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DesignBody)
