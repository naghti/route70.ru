import React, { useState } from "react";
import Place from "../placesInfo/Place";
import PlacesInfoMarker from "../placesInfo/PlacesInfoMarker";

function MobilePages(props) {
    let locations = require("../../" + props.places.chapter + ".json");



    return (
        <div>
            <div className="places">
                {locations.map((location) => {
                    return (
                        <Place
                            info={location}
                            MapOpenMarker={props.MapOpenMarker}
                            function1={props.function1}
                            returnMapPlaceInfo={props.returnMapPlaceInfo}
                            openMarker={props.openMarker}
                            openMarkerPhotos={props.openMarkerPhotos}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MobilePages;
