import React from 'react'
import Page from './Page'

function MobileNav() {
    return (
        <div className='mobileNav'>
            <Page text='Поесть' img='https://disk.2gis.com/rubricator/eat594ef1a575533c3c1b558ee032dad50c.svg'/>  
            <Page text='Аптеки' img='https://disk.2gis.com/rubricator/pharmacies21462c2d7f7c5be5dd8d2e1737bf8b28.svg'/>  
            <Page text='Шиномонтаж' img='https://disk.2gis.com/rubricator/tire_workshops542c80f7895a2012c98a79daacb4b1dd.svg'/>  
            <Page text='Другое' img='https://sun9-15.userapi.com/impg/1b-GyJWfT3ov8FASxEBSQig59MNrc46RZDFTgQ/4oaFsiCFbjU.jpg?size=32x32&quality=96&sign=df79fbd6b057438ec4c48e8a9b49b63b&type=album'/>  
        </div>
    )
}

export default MobileNav
