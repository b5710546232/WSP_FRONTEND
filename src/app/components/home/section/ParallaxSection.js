import React, { Component } from 'react'
import '../../../../assets/scss/home.scss'
import classnames from 'classnames';

export default class Section extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
  render(){
    var heightStyle = {
      height: this.props.height ? this.props.height:"600px"
    }
    var margin = {
      margin : this.props.margin ? this.props.margin:"auto"
    }
    var marginLogo = {
      marginTop : "5%"
    }
    return(
      <div>
        <div className="parallax-container" style={heightStyle}>
          <div className={classnames('container',this.props.position,'white-text')} style={margin}>
            <row>
              <div className="col s12" style={marginLogo}>
                <img src={this.props.logo}></img>
              </div>
              <div className="col s12">
                <h1>{this.props.title}</h1>
              </div>
              <div className="col s12">
                <h5>{this.props.subtitle}</h5>
              </div>
              <div className="col s12">
                {this.props.button}
              </div>
            </row>
          </div>
          <div className="parallax">
            <img src={this.props.background}/>
          </div>
        </div>
        {this.props.footer}
      </div>
    )
  }
}
