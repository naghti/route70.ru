import React from 'react'
import Image from './Image'
import Input from './Input'
import Close from './Close'
// import DopButton from './DopButton'

function Search() {
    return (
        <>
            <div className='search'>
                <Image/>
                <Input/>
                <Close/>
            </div>
            {/* <DopButton/> */}
        </>
    )
}

export default Search
