import React from "react";
function Page(props) {
    sessionStorage.setItem("Mpage", undefined);
    console.log(props);
    function click() {
        if(props.function == undefined){
            if(window.innerWidth < 500){
                if(props.openOtherPlaces != undefined){
                    props.openOtherPlaces(false)
                }
                props.setPlacesMarker()
                let b = sessionStorage.getItem("Mpage");
                if (b == props.text){
                    props.setPlacesMarker()
                    props.removeMap()
                    props.function1(false);
                    sessionStorage.setItem("Mpage", undefined);
                }else{
                    props.function1(props);
                    sessionStorage.setItem("Mpage", props.text);
                }
            }else{
                props.function1(props);
            }
        }else{
            props.function()
        }
    }
    function pageText(text) {
        let a = (window.innerWidth / 40)
        if (text.length > (a+2)){
            return text.substr(0, a) + '...'
        }
        else{
            return text
        }
    }
    return (
        <>
            <div
                className="page col-3 col-lg-3"
                onClick={() => {click()}}
            >
                <div className="page__box-image">
                    <img src={props.img} className="page__image" />
                </div>
                <p className="page__text">{pageText(props.text)}</p>
            </div>
        </>
    );
}

export default Page;
