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
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={alert(1)}
        >
          {this.props.locations.map(item => {
            if (item.address.length !== 0) {
              return item.address.map(i => {
                return (
                  <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
                    <img style={markerStyle} src={pin} alt="pin" />
                  </Link>
                );
              });
            }
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Mapi;
