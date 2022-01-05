import React, {  useEffect, useState } from 'react'
import '../styles/openMarkerPhotos/openMarkerPhotos.css'

function OpenMarkerPhotos(props) {
    let [photo, setPhoto] = useState(
        <img src={props.info.photo[0]}/>
    );
    function changePhoto(index) {
        setPhoto(<img src={props.info.photo[index]} className='openPhoto'/>)
    }
    useEffect(() => {
        let a = document.querySelector('.openPhoto')
        let b = document.querySelector('.rightPart')
        console.log(b.clientHeight)
        if (a != null){
            a.width > a.height ? 
            a.width = b.clientWidth : 
            a.height = b.clientHeight;
        }
    }, [photo]);
    console.log(props)
    return (
        <div className='openMarkerPhotos'>
            <div className='leftPart col-lg-4'>
                <div className='name'>
                    <h4> Name </h4>
                </div>
                <div className='photosList'>
                    {props.info.photo.map((item, i) => {
                        return <div className='photoItem' onClick={() => changePhoto(i)}>
                            <img src={item} className='photo'/>
                        </div>
                    })}
                </div>
            </div>
            <div className='rightPart col-lg-8'>
                {photo}
            </div>
        </div>
    )
}

export default OpenMarkerPhotos
