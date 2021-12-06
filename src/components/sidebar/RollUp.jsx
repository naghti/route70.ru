import React from 'react'
import rollUp from '../../images/rollUp.png';

function RollUp(props) {
    return (
        <div onClick={props.function1}>
            <img src={rollUp} alt="img" className='search__roll-up d-none d-lg-block' />
        </div>
    )
}

export default RollUp
