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
import MobileOtherPlaces from "./pages/MobileOtherPlaces";

const locations = require("./data/locations.json");
const poest = require("./data/poest.json");
const apteki = require("./data/apteki.json");

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
    let [placesMarker, setPlacesMarker] = useState();
    let [mobileOtherPlaces, setMobileOtherPlaces] = useState();
    let [component, setComponent] = useState(
        <Sidebar
            setPlacesMarker={setPlacesMarker}
            openMarker={openMarker}
            removeMap={removeMap}
            function1={getInfoMenuPage}
            open={sidebarOpen}
            MapOpenMarker={MapOpenMarker}
            clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
            openOtherPlaces={openOtherPlaces}
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
                    clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
                    MapOpenMarker={MapOpenMarker} 

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
            wrapSidebarScore = true;
            setComponent(
                <Sidebar
                    removeMap={removeMap}
                    setPlacesMarker={setPlacesMarker}
                    openMarker={openMarker}
                    clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
                    function1={getInfoMenuPage}
                    open={sidebarOpen}
                    MapOpenMarker={MapOpenMarker}
                    openOtherPlaces={openOtherPlaces}
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
        if (e == false){
            return setMobilePages();
        }
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
                    openMarker={openMarker}
                    setPlacesMarker={setPlacesMarker}
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
        setMarkerPhotosMobile(<OpenMarkerPhotosMobile removeOpenMarkerPhotosMobile={removeOpenMarkerPhotosMobile} info={e} />);
    }
    function openMarkerFromMap(info) {
        console.log(info)
        if (window.innerWidth < 500) {
            MapOpenMarker(info.address[0].lat, info.address[0].lng)
            setPlacesMarker(
                <PlacesInfoMarker
                    openMarkerPhotos={openMarkerPhotos}
                    openMarkerPhotosMobile={openMarkerPhotosMobile}
                    info={info}
                />
            );
            setMobilePages()
        } else {
            MapOpenMarker(info.address[0].lat, info.address[0].lng)
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
        removeMap()
        document.querySelector('.sidebarInfoClouse').style.display = "none"
        if(componentEssence == 'PlacesInfo'){
            setComponent(
                <Sidebar
                    removeMap={removeMap}
                    setPlacesMarker={setPlacesMarker}
                    openMarker={openMarker}
                    clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
                    function1={getInfoMenuPage}
                    open={sidebarOpen}
                    MapOpenMarker={MapOpenMarker}
                    openOtherPlaces={openOtherPlaces}
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
                      removeMap={removeMap}
                      setPlacesMarker={setPlacesMarker}
                      openMarker={openMarker}
                      clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo} 
                      function1={getInfoMenuPage}
                      open={sidebarOpen}
                      openOtherPlaces={openOtherPlaces}
                      MapOpenMarker={MapOpenMarker}
                  />      
              )
              break;
            case 4:
                break;
            default:
                setComponent(
                    <Sidebar
                        removeMap={removeMap}
                        setPlacesMarker={setPlacesMarker}
                        openMarker={openMarker}
                        clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
                        function1={getInfoMenuPage}
                        open={sidebarOpen}
                        MapOpenMarker={MapOpenMarker}
                        openOtherPlaces={openOtherPlaces}
                    />      
                );
        }
    }

    function removeOpenMarkerPhotos (){
        setMarkerPhotos()
    }

    function removeOpenMarkerPhotosMobile (){
        setMarkerPhotosMobile()
    }
    function removeMap() {
        setMap(
            <Mapi
                clickOnSidebarInfoClouse={clickOnSidebarInfoClouse}
                openMarkerPhotosMobile={openMarkerPhotosMobile}
                openMarkerPhotos={openMarkerPhotos}
                openMarkerFromMap={openMarkerFromMap}
                locations={"locations"}
                start={true}
            />
        );
    }
    function clickOnSearchMarkerOpenInfo (info){
        if(window.innerWidth > 500){
            let places = {
                chapter: 'poest'
            }
            console.log(info)
            setComponent(
                <PlacesInfo
                    marker={info}
                    places={places}
                    function1={setMap}
                    MapOpenMarker={MapOpenMarker}
                    open={sidebarOpen}
                    returnMapPlaceInfo={returnMapPlaceInfo}
                    openMarkerPhotos={openMarkerPhotos}
                    clickOnSearchMarkerOpenInfo={clickOnSearchMarkerOpenInfo}
                    MapOpenMarker={MapOpenMarker} 
                />
            )
        }
    }
    function openOtherPlaces(boolean){
        if(boolean == false){
            setMobileOtherPlaces()
        }else{
            setMobileOtherPlaces(<MobileOtherPlaces openOtherPlaces={openOtherPlaces} getInfoMenuPage={getInfoMenuPage} removeMap={removeMap} setPlacesMarker={setPlacesMarker}/>)
        }
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
            {mobileOtherPlaces}
            {/* <div className="wrapper">
            </div> */}
        </div>
        // ???????????????????? ?????? ???????????????? ?????????? ???????????????????? ?????? ?????????? (???????????? ????????)
    );
}
// ???????????????? mobile nav
export default CPU;
