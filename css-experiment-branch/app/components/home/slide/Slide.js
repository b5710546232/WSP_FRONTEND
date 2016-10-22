import React, { Component } from 'react'
import '../../../../dist/scss/navbar.scss'
export default class Slide extends Component {
  render() {
    return (
        <div id="main-slide" className="carousel slide height" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#main-slide" data-slide-to="0" className="active"></li>
            <li data-target="#main-slide" data-slide-to="1"></li>
            <li data-target="#main-slide" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="auto" src="media/images/store.jpg" alt="Store"/>
            </div>
            <div className="carousel-item">
              <img className="auto" src="media/images/design.jpg" alt="Design"/>
            </div>
            <div className="carousel-item">
              <img className="auto" src="media/images/top product.jpg" alt="Top"/>
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="icon-prev" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="icon-next" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    )
  }
}
