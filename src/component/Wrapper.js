import React from "react";
import Main from "./Main";

function Wrapper({children}) {
    const style = {
        backgroundColor:'yellow',
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;