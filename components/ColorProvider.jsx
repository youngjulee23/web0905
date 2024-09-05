import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import ColorBox from './ColorBox';

const ColorProvider = () => {
    const color = prompt('원하는 색상을 입력하세요')
    console.log(color);
    

    return (
    <ColorContext.Provider value={color}>
        <ColorBox/>   
    </ColorContext.Provider>
    );
};

export default ColorProvider;