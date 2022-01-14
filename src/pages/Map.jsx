import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../images/pin.png";
import { Link } from "react-router-dom";
import "../styles/map/map.css";
import Marker from "../components/map/Marker";
import sidebarWrap from "../images/rollUp.png";
import sidebarInfoClouseImg from "../images/sidebarInfoClouse.png";
import SidebarInfoClouse from "../components/map/SidebarInfoClouse";

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)",
};

function Mapi(props) {
    if (props.start != true) {
        document.querySelector(".sidebarInfoClouse").style.display = "block";
    }
    let wrapsidebarScore = true;

    function clickOnMarker(info) {
        console.log(info);
        props.openMarkerFromMap(info);
    }

    function wrapsidebar() {
        let sidebar =
            document.querySelector(".sidebar") != null
                ? document.querySelector(".sidebar")
                : document.querySelector(".placesInfo");

        if (wrapsidebarScore == true) {
            wrapsidebarScore = !wrapsidebarScore;
            sidebar.style.position = "absolute";
        } else {
            wrapsidebarScore = !wrapsidebarScore;
            sidebar.style.position = "relative";
        }
    }
    let defaultProps = {
        center: {
            lat: 56.491098,
            lng: 84.962755,
        },
        zoom: props?.zoom === undefined ? 13 : props?.zoom,
    };
    console.log(
        defaultProps.zoom
    )
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <div className="MapButtons">
                <SidebarInfoClouse clickOnSidebarInfoClouse={props.clickOnSidebarInfoClouse} img={sidebarInfoClouseImg}/>                

                <div className="sidebarWrap" onClick={() => wrapsidebar()}>
                    <img src={sidebarWrap} />
                </div>
            </div>

            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {typeof props.locations[0] == "number" ? (
                    <div
                        key={123}
                        lat={props.locations[0]}
                        lng={props.locations[1]}
                        onClick={() => alert(1)}
                    >
                        {" "}
                        <img style={markerStyle} src={pin} alt="pin" />{" "}
                    </div>
                ) : (
                    require("../" + props.locations + ".json").map((item) => {
                        sessionStorage.setItem("locations", props.locations);
                        if (item.address.length !== 0) {
                            let title = item.title;

                            return item.address.map((i) => {
                                return (
                                    <div
                                        key={i.id}
                                        lat={i.lat}
                                        lng={i.lng}
                                        className="markerBox"
                                        onClick={() => clickOnMarker(item)}
                                        // onMouseEnter={() => f(title,fraction,street)}
                                        // onMouseLeave={() => alert(2)}
                                    >
                                        <img
                                            style={markerStyle}
                                            src={pin}
                                            alt="pin"
                                        />
                                        <p className={props.locations}>
                                            {title}
                                        </p>
                                    </div>
                                );
                            });
                        }
                    })
                )}
            </GoogleMapReact>
        </div>
    );
}
export default Mapi;
