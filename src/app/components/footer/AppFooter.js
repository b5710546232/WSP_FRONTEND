import React, { Component } from 'react'
import {Link} from 'react-router'
import {Footer,Row,Button} from 'react-materialize'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'

const coords = {
  lat: 13.846977,
  lng: 100.5698995
};

export default class AppFooter extends Component {

  onMapCreated(map) {
   map.setOptions({
     disableDefaultUI: true
   });
  }

  render() {
    return (
      <Footer copyrights="&copy; 2016 Copywrong Powered by Star Burst Stream"

        links={
          <ul>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/' }}>Home</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/store' }}>Store</Link></li>
            <li><Link className="waves-effect waves-light white-text" to={{ pathname:'/design' }}>Design</Link></li>
          </ul>
        }
        className='page-footer light-blue'
        >
          <h5 className="white-text">Contact us</h5>
          <p>
            Company Here
            Address Here
          </p>
          <div className='map_container'>
          <Gmaps
              width={'800px'}
              height={'300px'}
              lat={coords.lat}
              lng={coords.lng}
              zoom={15}
              loadingMessage={'Map loading...'}
              params={{v: '3.exp', key: 'AIzaSyD3FLaVBGkmNU0V79OcpMzLFmts_Hba1qU'}}
              onMapCreated={this.onMapCreated}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            <InfoWindow
              lat={coords.lat}
              lng={coords.lng}
              content={'Wellcome to Nature Drink'}
              onCloseClick={this.onCloseClick} />
          </Gmaps>
          </div>
          <Row>
            <Button floating  className='red' waves='light' icon='add' />
            <Button floating  className='red' waves='light' icon='add' />
          </Row>

      </Footer>
    )
  }
}
