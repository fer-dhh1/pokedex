import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import { current } from '@reduxjs/toolkit';
import './styles/pokeSelect.css'

const PokeSelect = ({setSelectValue}) => {

    const [types, getTypes] = useFetch();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/';
        getTypes(url)
    }, []);

    const selectOption = useRef();

    const handleChange = () => {
        setSelectValue(selectOption.current.value);
    }
    
  return (
    <select className='select__options' ref={selectOption} onChange={handleChange}>
        <option value="">All Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default PokeSelect;