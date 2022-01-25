import React, { useState } from "react";
import PlaceFraction from "./PlaceFraction";
import PlaceName from "./PlaceName";
import PlaceLocation from "./PlaceLocation";
import Page from "../sidebar/Page";
import Mapi from "../../pages/Map";
import PlaceTelephone from "./PlaceTelephone";

function Place(props) {
    const [isActive, setActive] = useState(false);
    if (
        props.activeFilter != undefined &&
        props.activeFilter != props.info.fraction
    ) {
        return false;
    }
    console.log(props)
    const toggleClass = (a) => {
        if (a === true ){
            props.returnMapPlaceInfo()
            setActive(!isActive);
        }else{
            setActive(!isActive);
        }
    };
    function f(boolean,e){
        let c = document.querySelector('.placeInfoActive')
        function findAncestor (el, cls) {
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el;
        }
        if(window.innerWidth < 500){
            findAncestor(e.target,'placeInfo').classList.add("placeInfoActive");
        }
        if(c != null ){
            c.classList.remove("placeInfoActive");
        }
        if(boolean == true){
            props.setPlacesMarker()
            toggleClass(true)
            let b = sessionStorage.getItem('locations')
            props.function1(<Mapi locations={b} />)
        }else{
            toggleClass();
            props.MapOpenMarker(
                props.info.address[0].lat,
                props.info.address[0].lng
            );
            props.openMarker(props.info)
        }
    }
    console.log(props.info)
    return (
        <div
            className={

                'placeInfo container-fluid'
            }
            onClick={(e) => {                
                isActive === true ?
                   f(true,e)
                 :
                 f(false,e)
            }}
        >
            <div className="placeInfoText ">
                <PlaceName name={props.info.title} />
                <PlaceFraction fraction={props.info.fraction}/>
                <PlaceLocation street={props.info.address[0].address}/>
                <PlaceTelephone street={props.info.address[0].telephone}/>
                
            </div>
            <div className="placeInfoImg">
                <img src={props.info.photo[3]}></img>
            </div>
        </div>
    );
}

export default Place;
