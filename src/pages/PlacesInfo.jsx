import React, { useState } from 'react'
import Place from '../components/placesInfo/Place'
import PlacesInfoMarker from '../components/placesInfo/PlacesInfoMarker'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfo(props) {
    let sidebarClassName = 'col-4 placesInfo'
    let locations = require("../" + props.places.chapter + ".json")
    sidebarClassName += props.open == true ? ' open ' : ' no-open ' 
    let [placesMarker, setPlacesMarker] = useState(
        locations.map(location => {
            return <Place info={location} MapOpenMarker={props.MapOpenMarker} openMarker={openMarker} function1={props.function1} returnMapPlaceInfo={props.returnMapPlaceInfo} />
        })
    );
    function openMarker(info){
        console.log(info)
        setPlacesMarker(<PlacesInfoMarker openMarkerPhotos={props.openMarkerPhotos} info={info}/>)
    }
    if (props?.marker === undefined){
        return (
            <div className={sidebarClassName}>
                <div className="placesInfoSearchBack">
                    <Search
                        clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}
                        MapOpenMarker={props.MapOpenMarker} 

                    />
                </div>
                <div className="places">
                    {placesMarker}
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={sidebarClassName}>
                <div className="placesInfoSearchBack">
                    <Search
                        clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}
                        MapOpenMarker={props.MapOpenMarker} 
                    />
                </div>
                <div className="places">
                    <PlacesInfoMarker openMarkerPhotos={props.openMarkerPhotos} info={props.marker}/>
                </div>
            </div>
        )
    }
}

export default PlacesInfo
