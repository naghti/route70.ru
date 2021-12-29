import React from 'react'
import PlaceFraction from './PlaceFraction'
import PlaceName from './PlaceName'
import PlaceLocation from './PlaceLocation'
import Page from '../sidebar/Page'
import Mapi from '../../pages/Map'

function Place(props) {
    console.log(props);
    return (
        <div className="placeInfo container-fluid" onClick={props.function1(<Mapi place={props.info}/>)}>
            <div className="placeInfoText">
                <PlaceName name={props.info.title}/>
                <PlaceFraction/>
                <PlaceLocation/>    
            </div>
            <div className="placeInfoImg">
                <img src={props.info.image}></img>
            </div>
        </div>
    )
}

export default Place
