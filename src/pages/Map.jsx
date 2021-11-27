import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Mapi extends Component {
    render() {
      return (
        <div className='map'>
            <Map google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map>
        </div>
      );
    }
  }
   
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA')
})(Map)
