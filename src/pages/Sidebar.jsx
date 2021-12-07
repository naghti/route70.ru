import React from 'react'
import Menu from '../components/sidebar/Menu'
import SearchBack from '../components/sidebar/SearchBack'
import Map from './Map'
import '../styles/sidebar/style.css'
import MobileNav from '../components/sidebar/MobileNav'

function Sidebar(props) {
    return (
        <>
            <div className='sidebar col-12 col-lg-3'>
                <SearchBack/>
                <Menu function1={props.function1}/>
            </div>
            <MobileNav/>
            <Map/>
        </>
    )
}

export default Sidebar
