import React from "react";

function Input(props) {
    // function findAncestor (el, cls) {
    //     while ((el = el.parentElement) && !el.classList.contains(cls));
    //     return el;
    // }

    return (
            <>
                <div className="search__input">
                    <input
                        className="search__input-type"
                        placeholder="Поиск"
                        onClick={(e) => {
                            document.querySelector('.search__input-type').focus()
                        }}
                        onChange={(e) => props.inputChange(e.target.value)}
                    />
                </div>
            </>
        );
}

export default Input;
