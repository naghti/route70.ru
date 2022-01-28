import React from "react";
import Page from "./Page";
import Search from "./Search";

function MobileNav(props) {
    let pages = [
        {
            text: "Еда",
            img: "https://img.icons8.com/ultraviolet/40/000000/cutlery.png",
            chapter: 'poest'
        },
        {
            text: "Магазины",
            img: "https://img.icons8.com/ultraviolet/40/000000/shopping-bag--v1.png",
            chapter: "shinomontag"
        },
        {
            text: "Медицина",
            img: "https://img.icons8.com/ultraviolet/40/000000/pill.png",
            chapter: "apteki"
        },
        {
            text: "Посмотреть все",
            img: "https://img.icons8.com/ultraviolet/40/000000/point-objects.png",
            chapter: "izbranoe"
        }

    ];
    return (
        <div className="mobileNav__box d-block d-lg-none">
            <Search
                clickOnSearchMarkerOpenInfo={props.clickOnSearchMarkerOpenInfo}
                MapOpenMarker={props.MapOpenMarker}
                openMarker={props.openMarker}
            />
            <div className="mobileNav">
                {pages.map((page) => {
                    return (
                        <Page
                            removeMap={props.removeMap}
                            text={page.text}
                            img={page.img}
                            chapter={page.chapter}
                            function1={props.function1}
                            setPlacesMarker={props.setPlacesMarker}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MobileNav;
