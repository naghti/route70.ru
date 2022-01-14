import React from 'react'
import searchImgClose from '../../images/searchImgClose.png';

function Close(props) {
    return (
        <>
            <img src={searchImgClose} alt="img" className='search__img-close' onClick={() => props.clickOnSearchDelete()} />
        </>
    )
}

export default Close
