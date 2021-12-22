import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCity } from '../actions';
import styles from "./SearchBar.module.css";

const SearchBar = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleKeyDown = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      dispatch(addCity(search));
      setSearch('');
    };
  };

  const handleSearch = evt => {
    evt.preventDefault();
    setSearch('');
    dispatch(addCity(search));
  };

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  return (
    <div className = { styles.container }>
      <div className = { styles.buscador }>
        <input
          className = { styles.input }
          autoComplete = "off"
          name = 'city'
          placeholder = "Search a city..."
          onKeyDown = { handleKeyDown }
          value = { search }
          onChange = { handleChange }
        />
        <button className = { styles.btn } onClick = { handleSearch }>🔎</button>
      </div> 
    </div>
  );
};

export default SearchBar;