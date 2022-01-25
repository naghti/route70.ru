import React from "react";

function PlaceInfoMarkersFilter(props) {
    var mySet = new Set();
    props.location.map(e => mySet.add(e.fraction) )
    let items = []
    for (let item of mySet) items.push(item);
    return (
        <>
            <div className="filtersBox">
                {
                    items.map(item => {
                    return (
                        <div className="filterBox" data-filter={item} onClick={(e) => {props.filterPlaces(item)}}>
                            <h6 className="filterText">{item}</h6>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default PlaceInfoMarkersFilter;
