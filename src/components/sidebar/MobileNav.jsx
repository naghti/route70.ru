import React from 'react'
import Page from './Page'
import Search from './Search'

function MobileNav(props) {
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
            text: "остальное",
            img: "https://sun9-15.userapi.com/impg/1b-GyJWfT3ov8FASxEBSQig59MNrc46RZDFTgQ/4oaFsiCFbjU.jpg?size=32x32&quality=96&sign=df79fbd6b057438ec4c48e8a9b49b63b&type=album",
            chapter: "rubricki"
        },
    ]
    return (
        <div className='mobileNav__box d-block d-lg-none'>
            <Search/>
            <div className='mobileNav'>
                {
                    pages.map(page => {
                        return <Page text={page.text} img={page.img}  chapter={page.chapter} function1={props.function1} />  
                    })
                }
            </div>
        </div>
    )
}

export default MobileNav
