import React from 'react'

function PlacesInfoMarker(props) {
    console.log(props.info.address[0].address)
    return (
        <div>
            <img src={props.info.photo[0]} onClick={() => props.openMarkerPhotos(props.info)}/>
            <h2>{props.info.title}</h2>
            <h3>{props.info.address[0].address}</h3>
            <h3>{props.info.address[0].telephone}</h3>
            <h3>{props.info.fraction}</h3>
        </div>
    )
}

export default PlacesInfoMarker
