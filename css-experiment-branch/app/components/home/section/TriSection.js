import React, { Component } from 'react'

export default class TriSection extends Component {
  render() {
    return (
      <div className="section white center z-depth-2  ">
          <div className="container row">
            <div className="col s12">
              <h2 className="bold">{this.props.title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4 center">
              <div>
                <h3 className="medium">{this.props.subtitle[0]}</h3>
                <p className="light condensed">{this.props.detail[0]} 1</p>
              </div>
            </div>
            <div className="col s12 m4 center">
              <div>
                <h3 className="medium">{this.props.subtitle[1]}</h3>
                <p className="light condensed">{this.props.detail[1]}</p>
              </div>
            </div>
            <div className="col s12 m4 center">
              <div>
                <h3 className="medium">{this.props.subtitle[2]}</h3>
                <p className="light condensed">{this.props.detail[2]}</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
