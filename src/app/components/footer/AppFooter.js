import React, { Component } from 'react'
import {Link} from 'react-router'
import {Footer,Row,Button} from 'react-materialize'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'

const coords = {
  lat: 14.5684384,
  lng: 100.4140057
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
          <p className="white-text">
            Fasaiproduct Company
            40 Moo 5 Khlong Wua sub-district, Muang district, Ang-thong 14000
            Tel. 081-587-9559, 03-561-8233
          </p>
          <div className='map_container'>
          <Gmaps
              width={'20em'}
              height={'12em'}
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
          </Gmaps>
          </div>
      </Footer>
    )
  }
}
