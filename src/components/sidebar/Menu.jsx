import React from "react";
import Page from "./Page";

function Menu(props) {
    let pages = [
        {
            text: "Поесть",
            img: "https://disk.2gis.com/rubricator/eat594ef1a575533c3c1b558ee032dad50c.svg",
            chapter: 'poest'
        },
        {
            text: "Аптеки",
            img: "https://disk.2gis.com/rubricator/pharmacies21462c2d7f7c5be5dd8d2e1737bf8b28.svg",
            chapter: "apteki"
        },
        {
            text: "Шиномонтаж",
            img: "https://disk.2gis.com/rubricator/tire_workshops542c80f7895a2012c98a79daacb4b1dd.svg",
            chapter: "shinomontag"
        },
        {
            text: "Народная оптика",
            img: "https://ams2-cdn.2gis.com/raws/1cd74a94-f2ed-4dc1-95c0-ba722583e471/6f235ea835629f455ea4b8d870be6228-1.svg",
            chapter: "narodnayaOptika"
        },
        {
            text: "Шины",
            img: "https://disk.2gis.com/rubricator/tiresee3b9dbc39fa605ae18713328aca6300.svg",
            chapter: "shini"
        },
        {
            text: "Автосервис",
            img: "https://disk.2gis.com/rubricator/carservicec2ccb8751947d0fd184aa60489a7935b.svg",
            chapter: "avtoservis"
        },
        {
            text: "Рубрики",
            img: "https://sun9-15.userapi.com/impg/1b-GyJWfT3ov8FASxEBSQig59MNrc46RZDFTgQ/4oaFsiCFbjU.jpg?size=32x32&quality=96&sign=df79fbd6b057438ec4c48e8a9b49b63b&type=album",
            chapter: "rubricki"
        },
        {
            text: "Избранное",
            img: "https://sun9-10.userapi.com/impg/Rp-ovEr7SsbYjDiXQhiOSEqm_aU0Lyq6jC-2-Q/YZiI7UA2rao.jpg?size=32x32&quality=96&sign=691e48f1d2a83930802f6559185a2205&type=album",
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
