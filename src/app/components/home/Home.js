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
          subtitle="It&lsquo;s not the noob water, but &ldquo;It&lsquo;s water from the heaven!&ldquo;"
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
              subtitle={["Small Molecule","Postal Delivery","Healthy"]}
              detail={["It's fucking small","We have Postal Tracking EMS","I don't know K\nU\ny"]}
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
