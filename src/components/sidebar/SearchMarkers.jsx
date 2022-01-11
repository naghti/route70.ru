import React from 'react'

function SearchMarkers(props) {
    // console.warn(props)
    // if(props.length == false ){
    //     alert(props.length )
    //     return false
    // }else{
        alert(props.length )
        alert(foundedMarkers )
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
    // }
}

export default SearchMarkers
