import React from "react";
import Menu from "../components/sidebar/Menu";
import SearchBack from "../components/sidebar/SearchBack";
import Map from "./Map";
import "../styles/sidebar/style.css";
import MobileNav from "../components/sidebar/MobileNav";

function Sidebar(props) {
    let sidebarClassName = "sidebar col-12 col-lg-3";
    sidebarClassName += props.open == true ? " open " : " no-open ";
    return (
        <>
            <div className={sidebarClassName}>
                <SearchBack />
                <Menu function1={props.function1} />
            </div>
            <MobileNav />
            <Map
                id="myMap"
                options={{
                    center: { lat: 41.0082, lng: 28.9784 },
                    zoom: 8,
                }}
                onMapLoad={(map) => {
                    var marker = new window.google.maps.Marker({
                        position: { lat: 41.0082, lng: 28.9784 },
                        map: map,
                        title: "Hello Istanbul!",
                    });
                }}
            />
        </>
    );
}

export default Sidebar;
