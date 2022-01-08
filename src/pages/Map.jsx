import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../images/pin.png";
import { Link } from "react-router-dom";
import "../styles/map/map.css"
import Marker from "../components/map/Marker";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

function Mapi(props) {
  function clickOnMarker(info) {
    console.log(info)
    props.openMarkerFromMap(info)
  }
  let defaultProps = {
    center: {
      lat: 56.491098,
      lng: 84.962755
    },
    zoom: 13
  };
  return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA"
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {
               
                typeof(props.locations[0]) == 'number'?
                (<div key={123} lat={props.locations[0]} lng={props.locations[1]} onClick={() => alert(1)}> <img style={markerStyle} src={pin} alt="pin" /> </div> )
                  
                
                : 
                require("../" + props.locations + ".json")
                .map(item => {
                sessionStorage.setItem('locations', props.locations)
                if (item.address.length !== 0) {
                  let title = item.title
                  

                  return item.address.map(i => {
                    return (
                      <div key={i.id} lat={i.lat} lng={i.lng} className="markerBox"
                        onClick={() => clickOnMarker(item)}
                        // onMouseEnter={() => f(title,fraction,street)}
                        // onMouseLeave={() => alert(2)}
                      >
                        <img style={markerStyle} src={pin} alt="pin" />
                        <p className={props.locations}>{title}</p>
                      </div>
                    );
                  });
                }
              })
            }

        </GoogleMapReact>
      </div>      
  )
}

export default Mapi
