import React from 'react'
import Menu from '../components/sidebar/Menu'
import SearchBack from '../components/sidebar/SearchBack'
import '../styles/sidebar/style.css'

function Sidebar() {
    return (
        <div className='sidebar col-12 col-lg-3'>
            <SearchBack/>
            <Menu/>

        </div>
    )
}

export default Sidebar
