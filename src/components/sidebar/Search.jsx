import React, { useState } from "react";
import Image from "./Image";
import Input from "./Input";
import Close from "./Close";
import SearchMarkers from "./SearchMarkers";
// import DopButton from './DopButton'

function Search(props) {
    console.log(props);

    let fileMarkers = {
        poest: "poest",
        apteki: "apteki",
    };
    let [inputText, setInputText] = useState();
    let [close, setClose] = useState();
    let [inputClouse, setInputClose] = useState(false);
    let a = [];
    let [foundedMarkers, setFoundedMarkers] = useState();
    let allMarkers = [];
    Object.values(fileMarkers).map((oneFile) => {
        allMarkers.push(require("../../" + oneFile + ".json"));
    });
    function clickOnSearchMarker() {
        setFoundedMarkers();
        document.querySelector(".search__input-type").value = "";
    }
    function clickOnSearchDelete() {
        setFoundedMarkers()
        document.querySelector(".search__input-type").value = "";
        if (document.querySelector(".mobileNav__box") != null){
            document.querySelector(".mobileNav__box").querySelector(".search__input-type").value = "";
        }
        setClose()
    }
    function inputChange(value) {
        setClose()
        console.log(value);
        let result = [];
        let regex = new RegExp(value, "gi");
        allMarkers.map((markers) => {
            markers.map((marker) => {
                console.log(marker);
                let markerTitle = marker.title;
                let markerLat = marker.address[0].lat;
                let markerLng = marker.address[0].lng;
                let found = markerTitle.match(regex);
                console.log(found);
                console.log(foundedMarkers);
                if (found != null) {
                    result.push(marker);
                }
            });
        });
        if (value != "") {
            setClose(<Close clickOnSearchDelete={clickOnSearchDelete} />)
            setFoundedMarkers(
                <SearchMarkers
                    MapOpenMarker={props.MapOpenMarker}
                    foundedMarkers={result}
                    result={result}
                    value={value}
                    clickOnSearchMarker={clickOnSearchMarker}
                    clickOnSearchMarkerOpenInfo={
                        props.clickOnSearchMarkerOpenInfo
                    }
                    openMarker={props.openMarker}
                />
            );
        } else {
            setFoundedMarkers();
        }
    }
    return (
        <>
            <div className="search">
                <Image />
                <Input inputChange={inputChange} inputClouse={inputClouse} setFoundedMarkers={setFoundedMarkers}/>
                {close}
            </div>
            {foundedMarkers}
            {/* <DopButton/> */}
        </>
    );
}

export default Search;
