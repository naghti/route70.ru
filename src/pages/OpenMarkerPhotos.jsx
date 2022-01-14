import React, {  useEffect, useState } from 'react'
import '../styles/openMarkerPhotos/openMarkerPhotos.css'

function OpenMarkerPhotos(props) {
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
            <div className='leftPart col-lg-4'>
                <div className='leftPartHead'>
                    <div className='back' onClick={() => props.removeOpenMarkerPhotos()}>
                        <h4>&#60;</h4>
                    </div>
                    <div className='name'>
                        <h4> {props.info.title} </h4>
                    </div>
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

export default OpenMarkerPhotos
