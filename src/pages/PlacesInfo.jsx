import React from 'react'
import Place from '../components/placesInfo/Place'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfo(props) {
    let sidebarClassName = 'col-4 placesInfo'
    let locations = require("../" + props.places.chapter + ".json")
    sidebarClassName += props.open == true ? ' open ' : ' no-open ' 
    return (
        <div className={sidebarClassName}>
            <div className="placesInfoSearchBack">
                <Search/>
            </div>
            <div className="places">
                {
                    locations.map(location => {
                       return <Place info={location} function1={props.function1} />
                    })
                }
            </div>
        </div>
    )
}

export default PlacesInfo
