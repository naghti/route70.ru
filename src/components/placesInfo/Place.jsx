import React, { useState } from "react";
import PlaceFraction from "./PlaceFraction";
import PlaceName from "./PlaceName";
import PlaceLocation from "./PlaceLocation";
import Page from "../sidebar/Page";
import Mapi from "../../pages/Map";

function Place(props) {
    const [isActive, setActive] = useState(false);
    console.log(props)
    const toggleClass = (a) => {
        if (a === true ){
            props.returnMapPlaceInfo()
            setActive(!isActive);
        }else{
            setActive(!isActive);
        }
    };
    function f(boolean){
        if(boolean == true){
            toggleClass(true)
            let b = sessionStorage.getItem('locations')
            props.function1(<Mapi locations={b} />)
        }else{
            toggleClass();
            props.MapOpenMarker(
                props.info.address[0].lat,
                props.info.address[0].lng
            );
        }
    }
    return (
        <div
            className={
                isActive
                    ? "placeInfoActive container-fluid"
                    : "placeInfo container-fluid"
            }
            onClick={() => {
                isActive === true ?
                   f(true)
                 :
                 f(false)
            }}
        >
            <div className="placeInfoText">
                <PlaceName name={props.info.title} />
                <PlaceFraction />
                <PlaceLocation />
            </div>
            <div className="placeInfoImg">
                <img src={props.info.image}></img>
            </div>
        </div>
    );
}

export default Place;
