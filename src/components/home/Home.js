import React, { Component } from 'react'
import { Link } from 'react-router'
import ParallaxSection from './section/ParallaxSection'
import TriSection from './section/TriSection'
export default class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxSection
          position="center"
          logo="app/assets/images/logo.png"
          title="Nature Drink"
          subtitle="It&lsquo;s not the noob water, but &ldquo;It&lsquo;s water from the heaven!&ldquo;"
          button={
            <Link
              className="waves-effect waves-light btn-large"
              to={{ pathname:'/Store' }}
              >
              Visit Store
            </Link>
          }
          background="media/images/1.jpg"
          footer = {
            <TriSection
              title="Why you have to buy Nature Drink"
              subtitle={["Small Molecule","Postal Delivery","Healthy"]}
              detail={["It's fucking small","We have Postal Tracking EMS","I don't know K\nU\ny"]}
              />
          }
          />
        <ParallaxSection
          position="left"
          title="Explose your imagination!"
          subtitle="Design your own bottle!"
          background="media/images/2.png"
          height = "450px"
          margin = "3%"
          button={
            <Link
              className="waves-effect waves-light btn-large"
              to={{ pathname:'/Design' }}
              >
              Go to Design
            </Link>
          }
          />
      </div>
    )
  }
}
