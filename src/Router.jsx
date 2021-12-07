import {
    BrowserRouter, //сам роутер
    Route, //путь до компонента может быть много, основной компонент в который я вставляю путь по которому нужно отобразить какой-либо компонент
    Switch, //контейнер для наших роутов
    useRouteMatch, // хукй (хз зачем, но может будет нужен)
} from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import Mapi from "./pages/Map";
import "./styles/style.css";
import DopButton from "../src/components/sidebar/DopButton";
import PlacesInfo from "./pages/PlacesInfo";
import { useState } from "react";

let wrapSidebarScore = true;
console.log(wrapSidebarScore);
function Router() {
    console.log(wrapSidebarScore);
    let [component, setComponent] = useState(
        <Sidebar function1={getInfoMenuPage}/>
    );
    function wrapSidebar(e) {
        console.log(wrapSidebarScore);
        if (wrapSidebarScore === true) {
            wrapSidebarScore = false;
            setComponent(<PlacesInfo places={e} />);
        } else {
            wrapSidebarScore = true;
            setComponent(<Sidebar function1={getInfoMenuPage} />);
        }
    }
    function getInfoMenuPage(e) {
        wrapSidebar(e)
        console.log(e);
    }
    return (
        <>
            <div className="router">
                {/* <Sidebar/> */}
                {component}
                {/* <PlacesInfo/> */}
                <DopButton function1={() => wrapSidebar()} />
            </div>
        </>
    );
}
// перенеси mobile nav
export default Router;
