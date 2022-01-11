import React, { useState } from 'react'
import Image from './Image'
import Input from './Input'
import Close from './Close'
import SearchMarkers from './SearchMarkers'
// import DopButton from './DopButton'

function Search(props) {
    console.log(props)
    
    let fileMarkers = {
        poest: 'poest',
        apteki: 'apteki',
    }
    let [inputText, setInputText] = useState();
    let a = []
    let [foundedMarkers, setFoundedMarkers] = useState([]);
    let allMarkers = [];
    Object.values(fileMarkers).map(oneFile => {
        allMarkers.push(require("../../" + oneFile + ".json"))
    })
    function inputChange(value) {
        console.log(value)
        let result = []
        let regex = new RegExp(value, 'gi');
        console.log(foundedMarkers.length)
        allMarkers.map(markers => {
            markers.map( marker => {
                console.log(marker)
                let markerTitle = marker.title
                let markerLat = marker.address[0].lat
                let markerLng = marker.address[0].lng
                let found = markerTitle.match(regex)
                console.log(found)
                console.log(foundedMarkers)
                if (found != null){
                    
                    result.push(
                        {
                            title: markerTitle,
                            lat: markerLat,
                            lng: markerLng,
                        }
                    )
                }
            })
        })
        return setFoundedMarkers(result)
        a = result
    }
    return (
        <>
            <div className='search'>
                <Image/>
                <Input inputChange={inputChange}/>
                <Close/>
            </div>
            <SearchMarkers MapOpenMarker={props.MapOpenMarker} foundedMarkers={foundedMarkers} length={foundedMarkers.length > 0}/>
            {/* <DopButton/> */}
        </>
    )
}

export default Search
