import React from "react";
function Page(props) {
    sessionStorage.setItem("Mpage", undefined);
    console.log(props);
    function click() {
        if(window.innerWidth < 500){
            let b = sessionStorage.getItem("Mpage");
            if (b == props.text){
                props.setPlacesMarker()
                props.function1(false);
                sessionStorage.setItem("Mpage", undefined);
            }else{
                props.function1(props);
                sessionStorage.setItem("Mpage", props.text);
            }
        }else{
            props.function1(props);
        }
    }
    function pageText(text) {
        if(window.innerWidth < 500){
            if(text.length > 6 ){
                return text.substr(0, 5) + '...'
            }
            else{
                console.log(text.length)
                return text
            }
        }else{
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
