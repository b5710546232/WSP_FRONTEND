import React, { Component } from 'react'
import { Link } from 'react-router'
import GuestNavSubComponent from './navsubcomponent/GuestNavSubComponent'
import UserNavSubComponent from './navsubcomponent/UserNavSubComponent'
import {connect} from 'react-redux'
class HeaderNavbar extends Component {
  componentDidMount(){
    $(".button-collapse").sideNav()
  }
  shouldComponentUpdate(nextProps){
    return this.props.authed !== nextProps
  }
  render() {
    return (
      <nav className=" light-blue">
        <div className="nav-wrapper container ">
          <Link className="waves-effect waves-light brand-logo center" to={{ pathname:'/' }}>Nature Drink</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="hide-on-med-and-down center">
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/store' }}>Store</Link></li>
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/design' }}>design</Link></li>

            {!this.props.authed.isLogin ?<GuestNavSubComponent position="right"/>:<UserNavSubComponent position="right"/>}
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link className="waves-effect waves-light brand-logo" to={{ pathname:'/' }}>Nature Drink</Link></li>
            <li><Link className="waves-effect waves-light" to={{ pathname:'/store' }}>Store</Link></li>
            <li><Link className="waves-effect waves-light" to={{ pathname:'/design' }}>Design</Link></li>

            {!this.props.authed.isLogin ?<GuestNavSubComponent/>:<UserNavSubComponent/>}
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
