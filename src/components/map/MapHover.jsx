import React from 'react'
import '../../styles/map/map.css'
function MapHover(props) {
    console.log()
    return (
        <div className={'mapHoverBox'}>
            <div className="mapHoverImg">
                <img src={props.info.photo[0]}/>
            </div>
            <div className="MapHoverInfo">
                <div className="mapHoverText">
                    <h4 className={'mapHoverTitle'}>{props.info.title}</h4>
                    <h4 className={'mapHoverFraction'}>{props.info.fraction}</h4>
                </div>
                <div className="mapHoverInfoImg">
                    <img src={props.info.image} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default MapHover
