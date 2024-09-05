import React from 'react';
import { ColorContext } from './ColorContext';

const ColorBox = () => {
    const value = useContext(ColorContext);
    const style ={
        backgroundColor: value,
        height: "100vh"
}

    return (
       <div style={style}></div>
    );
};

export default ColorBox;