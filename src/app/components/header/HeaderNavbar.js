import React, { Component } from 'react'
import { Link } from 'react-router'
import GuestNavSubComponent from './navsubcomponent/GuestNavSubComponent'
import UserNavSubComponent from './navsubcomponent/UserNavSubComponent'
import UserSideNavSubComponent from './sidenavsubcomponent/UserSideNaveSubComponent'
import {connect} from 'react-redux'
class HeaderNavbar extends Component {
  componentDidMount(){
    $(".button-collapse").sideNav()
  }
  shouldComponentUpdate(nextProps){
    return this.props.user !== nextProps.user
  }
  render() {
    var margin = {
      marginLeft: "1%",
      marginRight: "1%"
    }
    return (
      <nav className=" light-blue">
        <div className="nav-wrapper  ">
          <Link className="waves-effect waves-light brand-logo center" to={{ pathname:'/' }}>Nature Drink</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="hide-on-med-and-down " style={margin}>
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/store' }}>Store</Link></li>
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/design' }}>Design</Link></li>

            {!this.props.user.isLogin ?<GuestNavSubComponent position="right"/>:<UserNavSubComponent position="right"/>}
          </ul>
          <ul className="side-nav light-blue " id="mobile-demo">
            {!this.props.user.isLogin ?<GuestNavSubComponent/>:<UserSideNavSubComponent/>}
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/' }}>Home</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/store' }}>Store</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/design' }}>Design</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(HeaderNavbar)
