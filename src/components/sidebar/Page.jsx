import React from 'react'
function Page(props) {
    return (
        <>
            <div className='page col-3 col-lg-3'>   
                <div className='page__box-image'>
                    <img src={props.img} className='page__image'/>
                </div>
                <p className='page__text'>
                    {props.text}
                </p>
            </div>
        </>
    )
}

export default Page
