import React from 'react'
import Place from '../components/placesInfo/Place'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfo() {
    return (
        <div className="col-4 placesInfo">
            <div className="placesInfoSearchBack">
                <Search/>
            </div>
            <div className="places">
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
            </div>
        </div>
    )
}

export default PlacesInfo
