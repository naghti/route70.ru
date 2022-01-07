import React, {  useEffect, useState } from 'react'
import '../styles/openMarkerPhotos/openMarkerPhotosMobile.css'

function OpenMarkerPhotosMobile(props) {
    let [photoIndex, setPhotoIndex] = useState(0);
    let [photo, setPhoto] = useState(
        <img src={props.info.photo[photoIndex]}/>
    );
    function changePhoto(index) {
        setPhoto(<img src={props.info.photo[index]} className='openPhoto'/>)
        setPhotoIndex(index)
    }
    // useEffect(() => {
    //     let a = document.querySelector('.openPhoto')
    //     let b = document.querySelector('.rightPart')
    //     console.log(b.clientHeight)
    //     if (a != null){
    //         a.width > a.height ? 
    //         a.width = b.clientWidth : 
    //         a.height = b.clientHeight;
    //     }
    // }, [photo]);
    console.log(props)
    function changePhotoForward(){
        if ((photoIndex - 1) < 0 ){
            setPhoto(<img src={props.info.photo[props.info.photo.length - 1]} className='openPhoto'/>)
            setPhotoIndex(props.info.photo.length - 1)
        }else{
            setPhoto(<img src={props.info.photo[photoIndex - 1]} className='openPhoto'/>)
            setPhotoIndex(photoIndex - 1)
        }
    }
    function changePhotoBack(){
        if ((photoIndex + 2) > props.info.photo.length ){
            setPhoto(<img src={props.info.photo[0]} className='openPhoto'/>)
            setPhotoIndex(0)
        }else{
            setPhoto(<img src={props.info.photo[photoIndex + 1]} className='openPhoto'/>)
            setPhotoIndex(photoIndex + 1)
        }
    }
    return (
        <div className='openMarkerPhotos'>
            <div className='leftPart'>
                <div className='name'>
                    <h4> Name </h4>
                </div>
            </div>
            <div className='rightPart'>
                <div className='photoBox'>
                    <div className='photo'>
                        {photo}
                    </div>
                </div>
                <div className='changePhoto'>
                    <div className='changePhotoForward' onClick={() => changePhotoForward()}>
                        <h2>&#9754;</h2>
                    </div>
                    <div className='changePhotoBack' onClick={() => changePhotoBack()}>
                        <h2>&#9755;</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenMarkerPhotosMobile
