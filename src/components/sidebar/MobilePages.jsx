import React from "react";
import Place from "../placesInfo/Place";

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
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MobilePages;
