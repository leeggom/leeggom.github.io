import React from 'react';
import PropTypes from 'prop-types';

function Main({name,color, maleYn}){
    const msg = maleYn ? 'main':'main_content';
    return (
        <div>
            <h2 style={{color}}> reactProps {name}. {msg}</h2>
        </div>
    )
}

Main.prototype = {
    name:PropTypes.string
}

Main.defaultProps = {
    name:'디폴트'
}

export default Main;