import React from 'react'
function Page(props) {
    console.log(props)
    return (
        <>
            <div className='page col-3 col-lg-3' onClick={() => props.function1(props)}>   
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
