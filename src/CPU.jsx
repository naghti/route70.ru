import { BrowserRouter, Link, Route } from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import "./styles/style.css";
import DopButton from "./components/sidebar/DopButton";
import PlacesInfo from "./pages/PlacesInfo";
import { useState } from "react";
import Mapi from "./pages/Map.jsx";
let data = {
    locations: require("./locations.json"),
    poest: require("./poest.json"),
};
let wrapSidebarScore = true;
let changeSidebarClassScore = true;
console.log(wrapSidebarScore);
function CPU() {
    console.log(wrapSidebarScore);
    let [sidebarOpen, setSidebarOpen] = useState(false);
    let [component, setComponent] = useState(
        <Sidebar function1={getInfoMenuPage} open={sidebarOpen} />
    );
    let [map, setMap] = useState(
        <Mapi
            id="myMap"
            options={{
                center: { lat: 56.491098, lng: 84.962755 },
                zoom: 12,
            }}
            onMapLoad={(map) => {
                data.locations[0].address.map((location) => {
                    return new window.google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map: map,
                        title: "Hello Istanbul!",
                    });
                });
            }}
        />
    );
    function wrapSidebar(e) {
        console.log(wrapSidebarScore);
        if (wrapSidebarScore === true) {
            wrapSidebarScore = false;
            console.log(typeof(+data[e.chapter][0].address[0].lat))
            setMap(
                <Mapi
                    id="myMap"
                    options={{
                        center: { lat: 56.491098, lng: 84.962755 },
                        zoom: 12,
                    }}
                    onMapLoad={(map) => {
                        console.log(data[e.chapter])
                        data[e.chapter].map((location) => {
                            console.log(location)
                            return new window.google.maps.Marker({
                                position: {
                                    lat: +location.address[0].lat,
                                    lng: +location.address[0].lng,
                                },
                                map: map,
                                title: "Hello Istanbul!",
                            });
                        });
                    }}
                />
            );
            setComponent(
                <PlacesInfo places={e} function1={setMap} open={sidebarOpen} />
            );

        } else {
            wrapSidebarScore = true;
            setComponent(
                <Sidebar function1={getInfoMenuPage} open={sidebarOpen} />
            );
        }
    }
    function getInfoMenuPage(e) {
        wrapSidebar(e);
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
        </div>
    );
}
// перенеси mobile nav
export default CPU;
