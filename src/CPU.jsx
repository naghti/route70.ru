import { BrowserRouter, Link, Route } from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import "./styles/style.css";
import DopButton from "./components/sidebar/DopButton";
import PlacesInfo from "./pages/PlacesInfo";
import { useState } from "react";
import Mapi from "./pages/Map.jsx";
import MobilePages from "./components/sidebar/MobilePages";
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
    let [component, setComponent] = useState(
        <Sidebar function1={getInfoMenuPage} open={sidebarOpen} MapOpenMarker={MapOpenMarker}/>
    );
    let [map, setMap] = useState(<Mapi locations={"locations"} />);
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
                />
            );
            setMap(<Mapi locations={e.chapter} />);
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
        setMap(<Mapi locations={[+lat, +lng]} />);
    }
    function getInfoMenuPage(e) {
        console.log(windowOuterWidth)
        console.log(windowOuterWidth > 400)
        if(windowOuterWidth > 400){
            wrapSidebar(e);
        }else{
            console.warn(e)
            setMap(<Mapi locations={e.chapter} />)
            setMobilePages(
                <MobilePages
                    places={e}
                    function1={setMap}
                    MapOpenMarker={MapOpenMarker}
                    open={sidebarOpen}
                    returnMapPlaceInfo={returnMapPlaceInfo}
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
    return (
        <div className="router">
            {/* <Sidebar/> */}
            {component}
            {/* <PlacesInfo/> */}
            <DopButton function1={() => changeSidebarClass()} />
            {map}
            {mobilePages}
            {/* <div className="wrapper">
            </div> */}
        </div>
    );
}
// перенеси mobile nav
export default CPU;
