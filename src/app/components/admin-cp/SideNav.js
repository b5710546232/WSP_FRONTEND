import React, { Component } from 'react'
import {check_admin} from '../../actions/UserAction'
import { Link } from 'react-router'
import {connect} from 'react-redux'
class SideNav extends Component {

  componentDidMount(){
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav fixed white">
          <li><div className="userView">
            <div className="background">
              <img src="src/assets/media/images/1_origin.jpg" className="responsive-img"/>
            </div>
            {this.props.user.userdata?
              <div className="right">

                <div className="row">
                  <span className="right "><Link to={{ pathname:'/' }}><i className="material-icons white-text">arrow_back</i></Link></span>
                </div>
                <div>
                  <span className="white-text name">{this.props.user.userdata.first_name} {this.props.user.userdata.last_name}</span>
                  <span className="white-text email">{this.props.user.userdata.username}</span>
                </div>
              </div>:<div></div>
            }
          </div>
          </li>
          <li> <i className="material-icons">home</i> Dashboard </li>
          <li> <i className="material-icons">account_circle</i> User </li>
          <li> <i className="material-icons">store</i> Category & Product </li>
          <li> <i className="material-icons">credit_card</i> Payment Method </li>
          <li> <i className="material-icons">receipt</i> Order </li>
          <li> <i className="material-icons">lightbulb_outline</i> Design </li>
        </ul>
        <div className="hide-on-large-only">
          <nav className="white fixed">
            <div className="nav-wrapper">
              <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons black-text">menu</i></a>
            </div>
          </nav>
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
export default connect(mapStateToProps,mapDispatchToProps)(SideNav)
