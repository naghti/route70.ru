import React from 'react'
import Search from './Search'
// import MainText from './MainText'

function SearchBack(props) {
    console.log(props)
    return (
        <>
            <div className='searchBack'>
                <Search MapOpenMarker={props.MapOpenMarker }
                clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}
                openMarker={props.openMarker} 
                />
                {/* <MainText/> */}
            </div>
        </>
    )
}

export default SearchBack
