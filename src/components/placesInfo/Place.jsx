import React from 'react'
import PlaceFraction from './PlaceFraction'
import PlaceName from './PlaceName'
import PlaceLocation from './PlaceLocation'
import Page from '../sidebar/Page'

function Place() {
    return (
        <div className="placeInfo container-fluid">
            <div className="placeInfoText">
                <PlaceName/>
                <PlaceFraction/>
                <PlaceLocation/>    
            </div>
            <div className="placeInfoImg">
                <img src="https://disk.2gis.com/rubricator/pharmacies21462c2d7f7c5be5dd8d2e1737bf8b28.svg"></img>
            </div>
        </div>
    )
}

export default Place
