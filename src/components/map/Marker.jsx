import React from 'react'

function Marker(props) {
    return (
        <div className="MarkerMoveOn">
            <div className="MArkerMoveOnTitle">
                <p>{props.title}</p>
            </div>
            <div className="MArkerMoveOnFraction">
                <p>{props.fraction}</p>
            </div>
            <div className="MArkerMoveOnStreet">
                <p>{props.street}</p>
            </div>
        </div>
    )
}

export default Marker
