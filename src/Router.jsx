import { BrowserRouter, Link, Route } from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import "./styles/style.css";
import DopButton from "../src/components/sidebar/DopButton";
import PlacesInfo from "./pages/PlacesInfo";
import { useState } from "react";
import Mapi from "./pages/Map.jsx";
const locations = require("./locations.json");


let wrapSidebarScore = true;
let changeSidebarClassScore = true;
console.log(wrapSidebarScore);
function Router() {
    console.log(wrapSidebarScore);
    let [sidebarOpen, setSidebarOpen] = useState(false);
    let [component, setComponent] = useState(
        <Sidebar function1={getInfoMenuPage} open={sidebarOpen}/>
    );
    function wrapSidebar(e) {
        console.log(wrapSidebarScore);
        if (wrapSidebarScore === true) {
            wrapSidebarScore = false;
            setComponent(<PlacesInfo places={e} open={sidebarOpen}/>);
        } else {
            wrapSidebarScore = true;
            setComponent(<Sidebar function1={getInfoMenuPage} open={sidebarOpen}/>);
        }
    }
    function getInfoMenuPage(e) {
        wrapSidebar(e)
        console.log(e);
    }
    function changeSidebarClass() {
        if(changeSidebarClassScore == true){
            changeSidebarClassScore = false
            setSidebarOpen(true)
        }else{
            changeSidebarClassScore = true
            setSidebarOpen(false)
        }
        
        console.log(sidebarOpen)
    }
    return (
            <BrowserRouter>
                <div className="router">
                    {/* <Sidebar/> */}
                    {component}
                    {/* <PlacesInfo/> */}
                    <DopButton function1={() => changeSidebarClass()} />
                    <Mapi locations={locations} />

                </div>
            </BrowserRouter>
    );
}
// перенеси mobile nav
export default Router;
