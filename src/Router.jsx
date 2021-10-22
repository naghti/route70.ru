import {
    BrowserRouter, //сам роутер
    Route, //путь до компонента может быть много, основной компонент в который я вставляю путь по которому нужно отобразить какой-либо компонент
    Switch, //контейнер для наших роутов
    useRouteMatch // хукй (хз зачем, но может будет нужен)
} from "react-router-dom";
import Hi from "./components/Hi";
function Router(){
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Hi} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;