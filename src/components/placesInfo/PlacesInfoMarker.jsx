import React, { useState } from "react";

function PlacesInfoMarker(props) {
    console.log(props);
    const [wrapperText, setWrapperText] = useState('свернуть');
    const [fScore, setFScore] = useState(true);
    let h = document?.querySelector('.mobileNav__box')?.clientHeight + 'px';
    
    function f() {
        if (fScore == true) {
            setWrapperText('развернуть')
            console.log(fScore)
            let infoMarker = document.querySelector(".infoMarker");
            setFScore(false);
            console.log(fScore)
            let infoMarkerInformation = document.querySelector(".infoMarkerInformation");
            let wrapperTextImg = document.querySelector(".wrapperTextImg");
            console.log(infoMarker);
            infoMarkerInformation.style.display = 'none'
            infoMarker.style.bottom = '0'
            infoMarker.style.top= 'auto'
            wrapperTextImg.classList.add('wrapperTextImgRotate')
            infoMarker.classList.add("infoMarkerWraperOpen");
        } else {
            setWrapperText('свернуть')
            let infoMarker = document.querySelector(".infoMarker");
            console.log(fScore)
            setFScore(true);
            console.log(fScore)
            console.log(infoMarker);
            let infoMarkerInformation = document.querySelector(".infoMarkerInformation");
            infoMarkerInformation.style.display = 'block'
            infoMarker.style.bottom = 'auto'
            infoMarker.style.top= document.querySelector('.mobileNav__box').clientHeight + 'px';
            let wrapperTextImg = document.querySelector(".wrapperTextImg");
            wrapperTextImg.classList.remove('wrapperTextImgRotate')
            infoMarker.classList.remove("infoMarkerWraperOpen");
        }
    }
    function c() {
        if (window.innerWidth < 500) {
            props.openMarkerPhotosMobile(props.info);
        } else {
            props.openMarkerPhotos(props.info);
        }
    }
    return (
        <>
            <div className="infoMarker" style={{top: h}}>
                <div
                    className="infoMarkerWraper border-bottom border-top"
                    onClick={() => {
                        f();
                    }}
                >
                <div className="wrapperText">
                    <h5>
                        {wrapperText}
                    </h5>
                    <img className="wrapperTextImg" src="https://fonts.gstatic.com/s/i/googlematerialicons/stat_minus_2/v11/black-24dp/2x/gm_stat_minus_2_black_24dp.png"/>
                </div>
                </div>
                <div className="infoMarkerInformation">

                <img
                    src={props.info.photo[0]}
                    onClick={() => c()}
                    className="infoMarkerImage"
                />
                <div className="infoMarkerTitleBox border-bottom">
                    <h2 className="infoMarkerTitle">{props.info.title}</h2>
                    <h3 className="infoMarkerFraction">
                        {props.info.fraction}
                    </h3>
                </div>
                <div className="info border-bottom">
                    <div className="infoMarkerAddressBox ">
                        <img
                            className="infoIcon"
                            src="https://www.gstatic.com/images/icons/material/system_gm/1x/place_gm_blue_24dp.png"
                        />
                        <h3 className="infoMarkerAddress">
                            {props.info.address[0].address}
                        </h3>
                    </div>
                    <div className="infoMarkerTelephoneBox ">
                        <img
                            className="infoIcon"
                            src="https://www.gstatic.com/images/icons/material/system_gm/1x/phone_gm_blue_24dp.png"
                        />
                        {props.info.address[0].telephone}
                        <h3 className="infoMarkerTelephone"></h3>
                    </div>
                    <div className="infoMarkerFractionBox ">
                        <img
                            className="infoIcon"
                            src="https://sun9-18.userapi.com/impg/ytE2P2D-P1RoWQ31KcEz6mqs0E3kvig3fAcJ0A/LsWulamFFOI.jpg?size=24x24&quality=96&sign=0e181b186faa1fcaac3a38f4fd3343f6&type=album"
                        />
                        <h3 className="infoMarkerFraction">
                            {props.info.fraction}
                        </h3>
                    </div>
                </div>

                <div className="infoMarkerAvailabilityBox border-bottom">
                    {Object.keys(props.info.availability[0]).map((e) => {
                        return (
                            <h3 className="infoMarkerAvailability">
                                <img
                                    className="availabilityIcon"
                                    src={
                                        props.info.availability[0][e] == "yes"
                                            ? "https://sun9-83.userapi.com/impg/oKESETsJaem_JhIvkIzeP9HfBTfnPvXsCXrd8A/6mlFmhS4YH8.jpg?size=20x20&quality=96&sign=441eb68a41bee97a81d9971dd1c850d0&type=album"
                                            : "https://sun9-49.userapi.com/impg/gCtYgXC3BvnfX9X0v5OdDh53ZmYZppra2I4yTg/cpxcelqoJx0.jpg?size=20x20&quality=96&sign=0b1e69be3fda13b8fb47b8ce4b12b9b7&type=album"
                                    }
                                />
                                {e}
                            </h3>
                        );
                    })}
                </div>
                <div className="infoMarkerAvailabilityBox border-bottom">
                    {Object.keys(props.info.pandus[0]).map((e) => {
                        return (
                            <h3 className="infoMarkerAvailability">
                                {
                                    e + ' - ' + props.info.pandus[0][e]
                                }
                            </h3>
                        );
                    })}
                </div>
                </div>
            </div>
        </>
    );
}

export default PlacesInfoMarker;
