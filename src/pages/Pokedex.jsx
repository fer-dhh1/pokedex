import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/pokedex.css'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';

const Pokedex = () => {

  const [page, setPage] = useState(1);
  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [pokemons, getPokemons, getType] = useFetch();

  const trainer = useSelector(store => store.trainer);

  useEffect(() => {
    if (selectValue) {
      getType(selectValue);
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
      getPokemons(url);
    }
  }, [selectValue]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = '';
  }

  const pokeSearch = (poke) => {
    const perName = poke.name.includes(inputValue);
    return perName;
  }

  const quantity = 1000;
  const total = Math.ceil(pokemons?.results.filter(pokeSearch).length / 5);
  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    return pokemons?.results.filter(pokeSearch).slice(start, end)
  }
  
  return (
    <section className='pokedex'>
      <div className='pokeball__red'>
        <div className='circle1'>
          <div className='circle2'></div>
        </div>
      </div>
      <div className='pokeball__black'></div>
      <h2 className='pokedex__title'><span>Welcome {trainer},
      </span><p>here you can find your favorite Pokemon</p></h2>
      <div className='pokedex__title'>
        <form className='start' onSubmit={handleSubmit}>
          <input className='input' ref={textInput} type="text" />
          <button className='btn'>Search</button>
        </form>
        <PokeSelect
          setSelectValue = {setSelectValue}
        />
      </div>
      <div className='pokedex__container'>
        {
          pagination()?.map((poke) => (
            <PokeCard
              key = {poke.url}
              url = {poke.url}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Pokedex;