import React, { useState } from 'react'
import Place from '../components/placesInfo/Place'
import PlaceInfoMarkersFilter from '../components/placesInfo/PlaceInfoMarkersFilter'
import PlacesInfoMarker from '../components/placesInfo/PlacesInfoMarker'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfo(props) {
    let lastFilter = ''
    let lastLastFilter = ''
    let sidebarClassName = 'col-4 placesInfo'
    let locations = require("../" + props.places.chapter + ".json")
    sidebarClassName += props.open == true ? ' open ' : ' no-open ' 
    let [placesMarker, setPlacesMarker] = useState(
        locations.map(location => {
            return <Place info={location} MapOpenMarker={props.MapOpenMarker} openMarker={openMarker} function1={props.function1} returnMapPlaceInfo={props.returnMapPlaceInfo} />
        })
    );
    function filterPlaces(filter){
        let abc = document.querySelectorAll('.filterBox')
        for( let i = 0; i < abc.length; i++){ 
            abc[i].classList.remove('filterBoxActive')
        }	
        if (filter != lastFilter){
            document.querySelector('.filterBox[data-filter="'+filter+'"]').classList.add('filterBoxActive')
            setPlacesMarker(
                locations.map(location => {
                    return <Place info={location} MapOpenMarker={props.MapOpenMarker} openMarker={openMarker} function1={props.function1} activeFilter={filter} returnMapPlaceInfo={props.returnMapPlaceInfo} />
                })
                );
                lastFilter = filter
        }
        else{
            setPlacesMarker(
                locations.map(location => {
                    return <Place info={location} MapOpenMarker={props.MapOpenMarker} openMarker={openMarker} function1={props.function1} returnMapPlaceInfo={props.returnMapPlaceInfo} />
                })
            );
            lastFilter = ''
        }
    }
    let [placesMarkerFilter, setPlacesMarkerFilter] = useState(<PlaceInfoMarkersFilter location={locations} filterPlaces={filterPlaces}/>);
    function openMarker(info){
        console.log(info)
        setPlacesMarkerFilter()
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
                {placesMarkerFilter}
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
