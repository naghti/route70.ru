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
    function returnName(){
        let a = (window.innerWidth / 20)
        return props.info.title.substr(0, a) + '...'
    }
    return (
        <div className='openMarkerPhotos'>
            <div className='leftPart' onClick={() => props.removeOpenMarkerPhotosMobile()}>
                <div className='leftPartHead'>
                    <div className='back'>
                        <img src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_back_gm_grey_24dp.png"/>
                    </div>
                    <div className='name'>
                        <h4> {returnName()} </h4>
                    </div>
                    <div class="addPhoto">
                        <a target="_blank" href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/ddRSklbmjeW57dG8oMFmkT"><img src="https://maps.gstatic.com/tactile/unifiedviewer/ic_mod_add_photo.svg"/></a>
                    </div>
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
                        <img src="https://fonts.gstatic.com/s/i/googlematerialicons/keyboard_arrow_left/v6/white-24dp/2x/gm_keyboard_arrow_left_white_24dp.png"/>
                    </div>
                    <div className='changePhotoBack' onClick={() => changePhotoBack()}>
                        <img src="https://fonts.gstatic.com/s/i/googlematerialicons/keyboard_arrow_right/v6/white-24dp/2x/gm_keyboard_arrow_right_white_24dp.png"/>                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenMarkerPhotosMobile
