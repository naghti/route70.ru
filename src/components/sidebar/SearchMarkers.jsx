import React from 'react'

function SearchMarkers(props) {
    // console.warn(props)
    // if(props.length == false ){
    //     alert(props.length )
    //     return false
    // }else{
        function conclusion (){
            if (props?.result.length == 0){
                return <p>По запросу «{props.value}» ничего не найдено </p>
            }else{
                return props.foundedMarkers.map(foundedMarker => {
                    return <p onClick={() => {
                        if (window.innerWidth < 500){
                            props.openMarker(foundedMarker)
                        }
                        props.MapOpenMarker([foundedMarker.address[0].lat],[foundedMarker.address[0].lng])
                        props.clickOnSearchMarker()
                        props.clickOnSearchMarkerOpenInfo(foundedMarker)
                        console.log(foundedMarker)
                    }}>
                        {foundedMarker.title}
                    </p>
                })
            }
        }        
        return (
            <div className='searchMarkers'>
                {
                    conclusion()
                }
            </div>
        )
    // }
}

export default SearchMarkers
