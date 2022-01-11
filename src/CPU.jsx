import { BrowserRouter, Link, Route } from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import "./styles/style.css";
import DopButton from "./components/sidebar/DopButton";
import PlacesInfo from "./pages/PlacesInfo";
import { useState } from "react";
import Mapi from "./pages/Map.jsx";
import MobilePages from "./components/sidebar/MobilePages";
import OpenMarkerPhotos from "./pages/OpenMarkerPhotos";
import PlacesInfoMarker from "./components/placesInfo/PlacesInfoMarker";
import OpenMarkerPhotosMobile from "./pages/OpenMarkerPhotosMobile";
import PlacesInfoOneMarker from "./pages/PlacesInfoOneMarker";

const locations = require("./locations.json");
const poest = require("./poest.json");
const apteki = require("./apteki.json");

let wrapSidebarScore = true;
let changeSidebarClassScore = true;

console.log(wrapSidebarScore);

function CPU() {
    let windowOuterWidth = window.outerWidth;
    console.log(wrapSidebarScore);
    let [sidebarOpen, setSidebarOpen] = useState(false);
    let [mobilePages, setMobilePages] = useState();
    let [mobileOpenInfoMarker, setMobileOpenInfoMarker] = useState();
    let componentEssence = 'Sidebar';
    let [component, setComponent] = useState(
        <Sidebar
            function1={getInfoMenuPage}
            open={sidebarOpen}
            MapOpenMarker={MapOpenMarker}
        />
    );
    let [componentOpen, setComponentOpen] = useState(true);
    let [map, setMap] = useState(
        <Mapi
            clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
            openMarkerPhotosMobile={openMarkerPhotosMobile}
            openMarkerPhotos={openMarkerPhotos}
            openMarkerFromMap={openMarkerFromMap}
            locations={"locations"}
            start={true}
        />
    );
    let [markerPhotos, setMarkerPhotos] = useState();
    let [markerPhotosMobile, setMarkerPhotosMobile] = useState();
    function wrapSidebar(e) {
        wrapSidebarScore = true
        if (wrapSidebarScore === true) {
            alert(5)
            wrapSidebarScore = false;
            componentEssence = 'PlacesInfo'
            setComponent(
                <PlacesInfo
                    places={e}
                    function1={setMap}
                    MapOpenMarker={MapOpenMarker}
                    open={sidebarOpen}
                    returnMapPlaceInfo={returnMapPlaceInfo}
                    openMarkerPhotos={openMarkerPhotos}
                />
            )
            setMap(
                <Mapi
                    clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
                    start={false}
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    openMarkerPhotos={openMarkerPhotos}
                    openMarkerFromMap={openMarkerFromMap}
                    locations={e.chapter}
                />
            );
        } else {
            alert(6)
            wrapSidebarScore = true;
            setComponent(
                <Sidebar
                    function1={getInfoMenuPage}
                    open={sidebarOpen}
                    MapOpenMarker={MapOpenMarker}
                />
            );
            componentEssence = 'Sidebar'
        }
    }
    function returnMapPlaceInfo() {
        let b = sessionStorage.getItem("locations");
        console.warn(b);
        setMap();
    }
    function MapOpenMarker(lat, lng) {
        setMap(
            <Mapi
                clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
                start={false}
                openMarkerPhotosMobile={openMarkerPhotosMobile}
                openMarkerPhotos={openMarkerPhotos}
                openMarkerFromMap={openMarkerFromMap}
                locations={[+lat, +lng]}
            />
        );
    }
    function getInfoMenuPage(e) {
        console.log(windowOuterWidth);
        console.log(windowOuterWidth > 400);
        if (windowOuterWidth > 400) {
            wrapSidebar(e);
        } else {
            console.warn(e);
            setMap(
                <Mapi
                    clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
                    start={false}
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    openMarkerPhotos={openMarkerPhotos}
                    openMarkerFromMap={openMarkerFromMap}
                    locations={e.chapter}
                />
            );
            setMobilePages(
                <MobilePages
                    places={e}
                    function1={setMap}
                    MapOpenMarker={MapOpenMarker}
                    open={sidebarOpen}
                    returnMapPlaceInfo={returnMapPlaceInfo}
                    openMarker={openMarker}
                    openMarkerPhotos={openMarkerPhotos}
                />
            );
        }
        console.log(e);
    }
    function changeSidebarClass() {
        if (changeSidebarClassScore == true) {
            changeSidebarClassScore = false;
            setSidebarOpen(true);
        } else {
            changeSidebarClassScore = true;
            setSidebarOpen(false);
        }

        console.log(sidebarOpen);
    }
    function openMarkerPhotos(e) {
        setMarkerPhotos(<OpenMarkerPhotos removeOpenMarkerPhotos={removeOpenMarkerPhotos} info={e} />);
    }
    function openMarkerPhotosMobile(e) {
        alert(3);
        setMarkerPhotosMobile(<OpenMarkerPhotosMobile removeOpenMarkerPhotosMobile={removeOpenMarkerPhotosMobile} info={e} />);
    }
    function openMarkerFromMap(info) {
        if (window.innerWidth < 500) {
            setPlacesMarker(
                <PlacesInfoMarker
                    openMarkerPhotos={openMarkerPhotos}
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    info={info}
                />
            );
        } else {
            setComponent(
                <PlacesInfoOneMarker
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    openMarkerPhotos={openMarkerPhotos}
                    info={info}
                />
            );
            componentEssence = 'PlacesInfoOneMarker'
        }
    }

    let [placesMarker, setPlacesMarker] = useState();
    function openMarker(info) {
        console.log(info);
        setPlacesMarker(
            <PlacesInfoMarker
                openMarkerPhotos={openMarkerPhotos}
                openMarkerPhotosMobile={openMarkerPhotosMobile}
                info={info}
            />
        );
    }

    function clickOnSidebarInfoClouse(e) {
        document.querySelector('.sidebarInfoClouse').style.display = "none"
        if(componentEssence == 'PlacesInfo'){
            setComponent(
                <Sidebar
                    function1={getInfoMenuPage}
                    open={sidebarOpen}
                    MapOpenMarker={MapOpenMarker}
                />      
            )
            setMap(
                <Mapi
                    clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    openMarkerPhotos={openMarkerPhotos}
                    openMarkerFromMap={openMarkerFromMap}
                    locations={"locations"}
                    start={true}
                />
            )
        }
        switch (componentEssence) {
            case 'PlacesInfo':
              setComponent(
                  <Sidebar
                      function1={getInfoMenuPage}
                      open={sidebarOpen}
                      MapOpenMarker={MapOpenMarker}
                  />      
              )
              break;
            case 4:
                break;
            default:
            alert( "error" );
        }
    }

    function removeOpenMarkerPhotos (){
        setMarkerPhotos()
        alert(2)
    }

    function removeOpenMarkerPhotosMobile (){
        setMarkerPhotosMobile()
    }
    return (
        <div className="router">
            {/* <Sidebar/> */}
            {component}
            {/* <PlacesInfo/> */}
            {/* <DopButton function1={() => changeSidebarClass()} /> */}
            {map}
            {mobilePages}
            {markerPhotos}
            {markerPhotosMobile}
            {mobileOpenInfoMarker}
            {placesMarker}

            {/* <div className="wrapper">
            </div> */}
        </div>
        // изначально при загрузке карта отображает все точки (должно быть)
    );
}
// перенеси mobile nav
export default CPU;
