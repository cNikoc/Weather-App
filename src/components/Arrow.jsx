import React from 'react';
import Style from "./Arrow.module.css";
import arrow from "./imgs/arrow.png"

const Arrow =()=> {
    return (
        <>
         <img alt="arrow" className={Style.flecha} src={arrow} />
        </>
    );
};

export default Arrow;
