import React, { Component } from 'react'

export default class Modal extends Component {
  componentDidMount(){
    $('#'+this.props.id).modal();
  }
  render(){
    return (
      <div>
        <a className="modal-trigger" href={'#'+this.props.id}>{this.props.trigger}</a>
        <div id={this.props.id} className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>{this.props.header}</h4>
            {this.props.children}
          </div>
          <div className="modal-footer">
            <div className="Row">
              <div className="left">
                {this.props.footer}
              </div>
              <div className="right">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
