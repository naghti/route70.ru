import React from "react";
import GoogleMapReact from "google-map-react";
import pin from "../images/pin.png";
import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

class Mapi extends React.Component {
  static defaultProps = {
    center: {
      lat: 56.491098,
      lng: 84.962755
    },
    zoom: 13
  };
  render() {
    console.log(this.props.locations == undefined)
    console.log(this.props.locations)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
               
                typeof(this.props.locations[0]) == 'number'?  (<div key={123} lat={this.props.locations[0]} lng={this.props.locations[1]} onClick={() => alert(1)}> <img style={markerStyle} src={pin} alt="pin" /> </div> )
                  
                
                : 
                require("../" + this.props.locations + ".json")
                .map(item => {
                if (item.address.length !== 0) {
                  return item.address.map(i => {
                    return (
                      <div key={i.id} lat={i.lat} lng={i.lng} onClick={() => alert(1)}>
                        <img style={markerStyle} src={pin} alt="pin" />
                      </div>
                    );
                  });
                }
              })
            }

        </GoogleMapReact>
      </div>
    );
  }
}

export default Mapi;
