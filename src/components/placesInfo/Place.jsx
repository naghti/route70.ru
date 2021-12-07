import React from 'react'
import PlaceFraction from './PlaceFraction'
import PlaceName from './PlaceName'
import PlaceLocation from './PlaceLocation'
import Page from '../sidebar/Page'

function Place(props) {
    return (
        <div className="placeInfo container-fluid">
            <div className="placeInfoText">
                <PlaceName name={props.info.text}/>
                <PlaceFraction/>
                <PlaceLocation/>    
            </div>
            <div className="placeInfoImg">
                <img src={props.info.img}></img>
            </div>
        </div>
    )
}

export default Place
