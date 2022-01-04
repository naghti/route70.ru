import React from 'react'

function SearchMarkers(props) {
    return (
        <div className='searchMarkers'>
            {
                props.foundedMarkers.map(foundedMarker => {
                    return <p onClick={() => props.MapOpenMarker([foundedMarker.lat],[foundedMarker.lng])}>
                        {foundedMarker.title}
                    </p>
                })
            }
        </div>
    )
}

export default SearchMarkers
