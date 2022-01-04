import React, { useState } from "react";
import Menu from "../components/sidebar/Menu";
import SearchBack from "../components/sidebar/SearchBack";
import "../styles/sidebar/style.css";
import MobileNav from "../components/sidebar/MobileNav";

function Sidebar(props) {
    console.log(props)

    let [mapMarkers, setMapMarkers] = useState();
    fetch('https://raw.githubusercontent.com/naghti/route70.ru_places/main/education.json')
        .then(response => response.json())
        .then(json => console.log(json))
        .then(console.log(mapMarkers))
    let sidebarClassName = "sidebar col-12 col-lg-3";
    sidebarClassName += props.open == true ? " open " : " no-open ";
    const containerStyle = {
        width: '100%',
        height: '100%'
      }
      function mapClicked() {
          alert(1)
      }

    return (
        <>
            <div className={sidebarClassName}>
                <SearchBack MapOpenMarker={props.MapOpenMarker} />
                <Menu function1={props.function1} />
            </div>
            <MobileNav />
        </>

    );
}

export default Sidebar;
