import React from "react";

function SidebarInfoClouse(props) {
    return (
        <div
            className="sidebarInfoClouse"
            onClick={(e) => props.clickOnSidebarInfoClouse(e)}
        >
            <img src={props.img} />
        </div>
    );
}

export default SidebarInfoClouse;
