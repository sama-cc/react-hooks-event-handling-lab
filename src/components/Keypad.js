import React from "react";

function Keypad (){

    function logChange(event) {
        console.log("Entering password...")
    }

    return (
        <div>
            <input onChange={logChange} type="password" />
        </div>
    )
}

export default Keypad;