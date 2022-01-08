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
    let windowOuterWidth = window.outerWidth
    console.log(wrapSidebarScore);
    let [sidebarOpen, setSidebarOpen] = useState(false);
    let [mobilePages, setMobilePages] = useState();
    let [mobileOpenInfoMarker, setMobileOpenInfoMarker] = useState();
    let [component, setComponent] = useState(
        <Sidebar function1={getInfoMenuPage} open={sidebarOpen} MapOpenMarker={MapOpenMarker}/>
    );
    let [map, setMap] = useState(<Mapi openMarkerPhotosMobile={openMarkerPhotosMobile} openMarkerPhotos={openMarkerPhotos} openMarkerFromMap={openMarkerFromMap} locations={"locations"} />);
    let [markerPhotos, setMarkerPhotos] = useState();
    let [markerPhotosMobile, setMarkerPhotosMobile] = useState();
    function wrapSidebar(e) {
        if (wrapSidebarScore === true) {
            wrapSidebarScore = false;
            setComponent(
                <PlacesInfo
                    places={e}
                    function1={setMap}
                    MapOpenMarker={MapOpenMarker}
                    open={sidebarOpen}
                    returnMapPlaceInfo={returnMapPlaceInfo}
                    openMarkerPhotos={openMarkerPhotos}
                />
            );
            setMap(<Mapi openMarkerPhotosMobile={openMarkerPhotosMobile} openMarkerPhotos={openMarkerPhotos}  openMarkerFromMap={openMarkerFromMap} locations={e.chapter} />);
        } else {
            wrapSidebarScore = true;
            setComponent(
                <Sidebar function1={getInfoMenuPage} open={sidebarOpen} MapOpenMarker={MapOpenMarker}/>
            );
        }
    }
    function returnMapPlaceInfo() {
        let b = sessionStorage.getItem('locations')
        console.warn(b)
        setMap()

    }
    function MapOpenMarker(lat, lng) {
        setMap(<Mapi openMarkerPhotosMobile={openMarkerPhotosMobile} openMarkerPhotos={openMarkerPhotos}  openMarkerFromMap={openMarkerFromMap} locations={[+lat, +lng]} />);
    }
    function getInfoMenuPage(e) {
        console.log(windowOuterWidth)
        console.log(windowOuterWidth > 400)
        if(windowOuterWidth > 400){
            wrapSidebar(e);
        }else{
            console.warn(e)
            setMap(<Mapi openMarkerPhotosMobile={openMarkerPhotosMobile} openMarkerPhotos={openMarkerPhotos}  openMarkerFromMap={openMarkerFromMap} locations={e.chapter} />)
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
    function openMarkerPhotos(e){
        setMarkerPhotos(<OpenMarkerPhotos info={e}/>)
    }
    function openMarkerPhotosMobile(e){
        alert(3)
        setMarkerPhotosMobile(<OpenMarkerPhotosMobile info={e}/>)
    }
    function openMarkerFromMap(info){
        if(window.innerWidth < 500){
            setPlacesMarker(<PlacesInfoMarker openMarkerPhotos={openMarkerPhotos} openMarkerPhotosMobile={openMarkerPhotosMobile} info={info}/>)
        }else{
            setComponent(<PlacesInfoOneMarker openMarkerPhotosMobile={openMarkerPhotosMobile} openMarkerPhotos={openMarkerPhotos}  info={info}/>)
        }
    }

    let [placesMarker, setPlacesMarker] = useState();
    function openMarker(info){
        console.log(info)
        setPlacesMarker(<PlacesInfoMarker openMarkerPhotos={openMarkerPhotos} openMarkerPhotosMobile={openMarkerPhotosMobile} info={info}/>)
    }


    return (
        <div className="router">
            {/* <Sidebar/> */}
            {component}
            {/* <PlacesInfo/> */}
            <DopButton function1={() => changeSidebarClass()} />
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
