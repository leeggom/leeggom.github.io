import React from 'react';
import PropTypes from 'prop-types';

function Main({name,color, maleYn}){
    const msg = maleYn ? '바나나':'옥수수';
    return (
        <div>
            <h1 style={{color}}>hello {name}. {msg}</h1>
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