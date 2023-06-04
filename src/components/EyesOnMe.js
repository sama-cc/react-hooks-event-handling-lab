import React from "react";

function EyesOnMe() {

    function isFocused() {
        console.log("Good!")
    }

    function isBlurred() {
        console.log("Hey! Eyes on me!")
    }

    return (
        <button onFocus={isFocused} onBlur={isBlurred}>Eyes on me</button>
    )
}

export default EyesOnMe;
