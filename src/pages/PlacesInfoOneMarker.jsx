import React, { useState } from 'react'
import Place from '../components/placesInfo/Place'
import PlacesInfoMarker from '../components/placesInfo/PlacesInfoMarker'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfoOneMarker(props) {
    console.log(props)
    let sidebarClassName = 'col-4 placesInfo'
    sidebarClassName += props.open == true ? ' open ' : ' no-open ' 
    let [placesMarker, setPlacesMarker] = useState(<PlacesInfoMarker openMarkerPhotos={props.openMarkerPhotos} openMarkerPhotosMobile={props.openMarkerPhotosMobile} info={props.info}/>);
    return (
        <div className={sidebarClassName}>
            <div className="placesInfoSearchBack">
                <Search/>
            </div>
            <div className="places">
                {placesMarker}
            </div>
        </div>
    )
}

export default PlacesInfoOneMarker
