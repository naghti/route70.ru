import {
    BrowserRouter, //сам роутер
    Route, //путь до компонента может быть много, основной компонент в который я вставляю путь по которому нужно отобразить какой-либо компонент
    Switch, //контейнер для наших роутов
    useRouteMatch // хукй (хз зачем, но может будет нужен)
} from "react-router-dom";
import Hi from "./components/Hi";
import Sidebar from "./pages/Sidebar";
import Mapi from "./pages/Map";
import './styles/style.css'
import DopButton from '../src/components/sidebar/DopButton'

function Router(){
    return (
        <>
            <div className='router'>
                <Sidebar/>
                
                <DopButton/>
                {/* <Mapi/> */}
            </div>
        </>
    )
}

export default Router;