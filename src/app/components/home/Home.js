import React, { Component } from 'react'
import { Link } from 'react-router'
import ParallaxSection from './section/ParallaxSection'
import TriSection from './section/TriSection'
export default class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxSection
          position="right"
          logo="src/assets/media/images/logo.png"
          title="Nature Drink"
          subtitle="It&rsquo;s a clean mineral water from the mountain"
          button={
            <div className="right-align">
            <Link
              className="waves-effect waves-light btn-large"
              to={{ pathname:'/Store' }}
              >
              Visit Store
            </Link>
            </div>
          }
          background="src/assets/media/images/1.jpg"
          footer = {
            <TriSection
              title="Why you have to buy Nature Drink"
              subtitle={["Clean","Postal Delivery","Healthy"]}
              detail={["Clean and Free from bacteria","We have Postal Tracking EMS","Breezy and Well-being"]}
              />
          }
          />
        <ParallaxSection
          position="right"
          title="Explose your imagination!"
          subtitle="Design your own bottle!"
          background="src/assets/media/images/2.png"
          height = "450px"
          margin = "3%"
          button={
            <div className="right-align">
            <Link
              className="waves-effect waves-light btn-large GotoDesignBtn"
              to={{ pathname:'/Design' }}
              >
              Go to Design
            </Link>
            </div>
          }
          />
      </div>
    )
  }
}
