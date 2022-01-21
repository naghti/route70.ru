import React from "react";
import Page from "./Page";

function Menu(props) {
    let pages = [
        {
            text: "Поесть",
            img: "https://img.icons8.com/ultraviolet/40/000000/cutlery.png",
            chapter: 'poest'
        },
        {
            text: "Аптеки",
            img: "https://img.icons8.com/ultraviolet/40/000000/pill.png",
            chapter: "apteki"
        },
        {
            text: "Магазины",
            img: "https://img.icons8.com/ultraviolet/40/000000/shopping-bag--v1.png",
            chapter: "shinomontag"
        },
        {
            text: "Учр.культуры",
            img: "https://img.icons8.com/ultraviolet/40/000000/university.png",
            chapter: "narodnayaOptika"
        },
        {
            text: "Образование",
            img: "https://img.icons8.com/ultraviolet/40/000000/school.png",
            chapter: "shini"
        },
        {
            text: "Транспорт",
            img: "https://img.icons8.com/ultraviolet/40/000000/train.png",
            chapter: "avtoservis"
        },
        {
            text: "Маршруты",
            img: "https://img.icons8.com/ultraviolet/40/000000/change.png",
            chapter: "rubricki"
        },
        {
            text: "Другие места",
            img: "https://img.icons8.com/ultraviolet/40/000000/point-objects.png",
            chapter: "izbranoe"
        },
    ];
    return (
        <div className="menu">
            {pages.map((page) => {
                return (
                    <Page
                        function1={props.function1}
                        text={page.text}
                        img={page.img}
                        chapter={page.chapter}
                    />
                );
            })}
        </div>
    );
}

export default Menu;
