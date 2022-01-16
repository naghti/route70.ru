import React from "react";

function Input(props) {
        return (
            <>
                <div className="search__input">
                    <input
                        className="search__input-type"
                        placeholder="text"
                        onClick={(e) => document.querySelector('.search__input-type').focus()}
                        onChange={(e) => props.inputChange(e.target.value)}
                    />
                </div>
            </>
        );
}

export default Input;
