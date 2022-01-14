import React from "react";

function Input(props) {
        return (
            <>
                <div className="search__input">
                    <input
                        className="search__input-type"
                        placeholder="text"
                        onClick={(e) => console.log(1)}
                        onChange={(e) => props.inputChange(e.target.value)}
                    />
                </div>
            </>
        );
}

export default Input;
