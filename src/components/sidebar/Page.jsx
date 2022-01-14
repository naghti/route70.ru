import React from "react";
function Page(props) {
    console.log(props);
    function click() {
        let b = sessionStorage.getItem("Mpage");
        if (b == props.text){
            props.function1(false);
            sessionStorage.setItem("Mpage", undefined);
        }else{
            props.function1(props);
            sessionStorage.setItem("Mpage", props.text);
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
                <p className="page__text">{props.text}</p>
            </div>
        </>
    );
}

export default Page;
