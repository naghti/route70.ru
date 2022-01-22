import React from 'react'

function PlaceTelephone(props) {
    return (
        <div className='d-none d-md-block'>
            <h5 className="placeLocation">{props.street}</h5>
        </div>
    )
}

export default PlaceTelephone
