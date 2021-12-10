import React from 'react'
import Place from '../components/placesInfo/Place'
import Input from '../components/sidebar/Input'
import Search from '../components/sidebar/Search'
import '../styles/placesInfo/style.css'

function PlacesInfo(props) {
    let sidebarClassName = 'col-4 placesInfo'
    sidebarClassName += props.open == true ? ' open ' : ' no-open ' 
    return (
        <div className={sidebarClassName}>
            <div className="placesInfoSearchBack">
                <Search/>
            </div>
            <div className="places">
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
                <Place info={props.places}/>
            </div>
        </div>
    )
}

export default PlacesInfo
