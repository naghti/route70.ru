import React from "react";
import Page from "./Page";

function Menu(props) {
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
            text: "Культура",
            img: "https://img.icons8.com/ultraviolet/40/000000/university.png",
            chapter: "narodnayaOptika"
        },
        {
            text: "Зона отдыха",
            img: "https://img.icons8.com/ultraviolet/40/000000/theme-park.png",
            chapter: "avtoservis"
        },
        {
            text: "Образование",
            img: "https://img.icons8.com/ultraviolet/40/000000/school.png",
            chapter: "shini"
        },
        {
            text: "Соц.помощь",
            img: "https://img.icons8.com/ultraviolet/40/000000/about-us-male.png",
            chapter: "rubricki"
        },
        {
            text: "Посмотреть все",
            img: "https://img.icons8.com/ultraviolet/40/000000/point-objects.png",
            chapter: "izbranoe"
        }
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
