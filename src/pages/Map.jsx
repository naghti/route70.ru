import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import pin from "../images/poest.png";
import user from "../images/userGeolocation.png";
import "../styles/map/map.css";
import Marker from "../components/map/Marker";
import sidebarWrap from "../images/rollUp.png";
import sidebarInfoClouseImg from "../images/sidebarInfoClouse.png";
import SidebarInfoClouse from "../components/map/SidebarInfoClouse";
import MapHover from "../components/map/MapHover";

const markerStyle = {
    position: "absolute",
    top: "100%",
    width: "20px",
    left: "50%",
    transform: "translate(-50%, -100%)",
};

function Mapi(props) {
    let [userGeolocation, setUserGeolocation] = useState();
    let data =  typeof props.locations[0] == "number" ? [props.locations[0],props.locations[1]] : require("../data/" + props.locations + ".json") ;
    let allMarkerfiles = ["apteki","locations","poest"];
    let allMarkers = [];
    allMarkerfiles.map(markerFile => {
        let a = require("../data/" + markerFile + ".json")
        console.log(a)
        allMarkers = [...allMarkers,...a]
        console.log(allMarkers)
    })
    if (props.start != true) {
        document.querySelector(".sidebarInfoClouse").style.display = "block";
    }else{
        data = allMarkers;
        console.log(data)
    }
    let wrapsidebarScore = true;

    function clickOnMarker(info) {
        document.querySelector('.sidebarInfoClouse').style.display = 'block'
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
    function success(pos) {
        var crd = pos.coords;
        let latitude = crd.latitude;
        let longitude = crd.longitude;
        setUserGeolocation(
            <div
                key={123}
                lat={latitude}
                lng={longitude}
                title={
                `???????? ?????????????? ????????????????????????????.` +
                `\n`+
                `????????-?????????? ${crd.accuracy.toString().substr(0,4)} ??????????`
                }
            >
                {" "}
                <img style={markerStyle} src={user} alt="pin"/>{" "}

            </div>
        )
        console.log(`????????-?????????? ${crd.accuracy} ????????????.`);
    };
    // function centerEllement(e,g){
    //     let screenX = e.screenX
    //     let screenY = e.screenY
    //     let innerWidth = window.innerWidth
    //     let innerHeight = window.innerHeight
    //     let offsetWidth = document.querySelector('.mapus').offsetWidth
    //     let offsetHeight = document.querySelector('.mapus').offsetHeight
    //     let x;
    //     let y;
    //     if ((offsetWidth - screenX) > offsetWidth){
    //         x = '0'
    //     }else{
    //         x = '-100%'
    //     }
    //     if ((offsetHeight - screenY) > screenY){
    //         y = '0'
    //     }else{
    //         y = '-100%'
    //     }
    //     return g == 'x' ? x : y;
    // }
    navigator.geolocation.getCurrentPosition(success);
    return (
        <div style={{ height: "100vh", width: "100%" }} className={'mapus'}>
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
                {userGeolocation}
                {typeof props.locations[0] == "number" ? (
                    <div
                        key={123}
                        lat={props.locations[0]}
                        lng={props.locations[1]}
                        // onClick={() => alert(1)}
                    >
                        {" "}
                        <img style={markerStyle} src={pin} alt="pin"/>{" "}
                    </div>
                ) : (
                    data.map((item) => {
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
                                        // onMouseLeave={() => alert(2)}

                                    >
                                        <MapHover location={props.locations} info={item}/>
                                        <img
                                            style={markerStyle}
                                            src={pin}
                                            alt="pin"
                                            onMouseEnter={(e) => {

                                                // e.target.parentNode.querySelector('.mapHoverBox').style.transform = `translate(${centerEllement(e,'x')},${centerEllement(e,'y')})`
                                                e.target.parentNode.querySelector('.mapHoverBox').style.display = "flex"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.parentNode.querySelector('.mapHoverBox').style.display = "none"
                                            }}
                                        />
                                        <p className={props.locations}>
                                            {
                                                props.start != true ? title : ''
                                            }
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
