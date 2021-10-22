import React from 'react'
import Input from './Input'
import searchImg from '../../images/searchImg.jpg';

function Search() {
    return (
        <div>
            <img src={searchImg} alt="img" />
            <Input/>
        </div>
    )
}

export default Search
