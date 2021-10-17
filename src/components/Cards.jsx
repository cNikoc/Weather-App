import React from "react";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeCity } from "../actions";

const Cards = () => {

    const ciudades = useSelector(state => state);
    const dispatch = useDispatch();
    
    function handleClose(id) {
        dispatch(removeCity(id));
    }

    return (
        <div className = { styles.cartas }>
            {ciudades && ciudades.map(city => (
                <div className = { styles.containerCarta }>
                        <button className = { styles.btn } onClick = {() => handleClose(city.id)}>❌</button>
                        <h3 className = { styles.nombreCiudad }>{city.name}</h3>
                        <div className = { styles.temps }>
                            <span className = { styles.max }>Max: {Math.round(city.main.temp_max)}°</span>
                            <span className = { styles.min }>Min: {Math.round(city.main.temp_min)}°</span>
                        </div>
                        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="not found" className = { styles.imgClima }/>
                </div>
            ))}
        </div>
    );
}

export default Cards;