import React from "react";

function PlacesInfoMarker(props) {
    console.log(props);
    let fScore = true;
    function f() {
        if (fScore == true) {
            fScore = !fScore;
            let infoMarker = document.querySelector(".infoMarker");
            console.log(infoMarker);
            infoMarker.classList.add("infoMarkerWraperOpen");
        } else {
            fScore = !fScore;
            let infoMarker = document.querySelector(".infoMarker");
            console.log(infoMarker);
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
            <div className="infoMarker">
                <img
                    src={props.info.photo[0]}
                    onClick={() => c()}
                    className="infoMarkerImage"
                />
                <div className="infoMarkerTitleBox ">
                    <h2 className="infoMarkerTitle">{props.info.title}</h2>
                    <h3 className="infoMarkerFraction">
                        {props.info.fraction}
                    </h3>
                </div>
                <div className="infoMarkerAddressBox ">
                    <h3 className="infoMarkerAddress">
                        {props.info.fraction + ' "' + props.info.address[0].address +'"'}
                    </h3>
                </div>
                <div className="infoMarkerTelephoneBox ">
                    <h3 className="infoMarkerTelephone">
                        {props.info.address[0].telephone}
                    </h3>
                </div>
                <div className="infoMarkerFractionBox ">
                    <h3 className="infoMarkerFraction">
                        {props.info.fraction}
                    </h3>
                </div>
            </div>
            <div className="infoMarkerWraper" onClick={() => f()}>
                развернуть
            </div>
        </>
    );
}

export default PlacesInfoMarker;
