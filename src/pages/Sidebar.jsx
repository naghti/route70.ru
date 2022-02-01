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
        //   alert(1)
      }

    return (
        <>
            <div className={sidebarClassName}>
                <SearchBack clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}  MapOpenMarker={props.MapOpenMarker} openMarker={props.openMarker} />
                <Menu function1={props.function1} />
                <div className="otherInfo">
                    <div className="title">
                        <h3 className={'titleText'}>Доп.информация</h3>
                    </div>
                    <div className="infoBlocksBox">
                        <div className="infoBlock ">
                            <div className="infoBlockImgBox">
                                <img className={'infoBlockImg'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png" alt="VK"/>
                            </div>
                            <h3 className={'infoBlockText'}>Мы в Вконтакте</h3>
                        </div>
                        <a href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/cWtJvaWObdOzWTWQ8HWOuD">
                            <div className="infoBlock ">
                                <div className="infoBlockImgBox">
                                    <img className={'infoBlockImg'} src="https://img.icons8.com/ultraviolet/40/000000/feedback.png" alt="VK"/>
                                </div>
                                <h3 className={'infoBlockText'}>Обратная Связь</h3>
                            </div>
                        </a>
                        <a href="https://quintadb.ru/widgets/cVW4tcGCjcu4kguSo-W6LZ/blW4RcGvncNioSW7O0ySoC">
                            <div className="infoBlock ">
                                <div className="infoBlockImgBox">
                                    <img className={'infoBlockImg'} src="https://img.icons8.com/ultraviolet/40/000000/add-image.png" alt="VK"/>
                                </div>
                                <h3 className={'infoBlockText'}>Добавить Место</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <MobileNav 
                function1={props.function1} 
                removeMap={props.removeMap}
                clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}
                MapOpenMarker={props.MapOpenMarker} 
                openMarker={props.openMarker}
                setPlacesMarker={props.setPlacesMarker}

            />
        </>

    );
}

export default Sidebar;
