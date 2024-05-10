import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeinfo.css'

const Pokeinfo = () => {

  const params = useParams();

  const [pokemon, getPokemon ] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
  }, [])
  
  console.log(pokemon);

  return (
    <section className='pokeinfo'>
      <div className='pokeball__red'>
        <div className='circle1'>
          <div className='circle2'></div>
        </div>
      </div>
      <div className='pokeball__black'></div>
      <div className='pokeinfo__card'>
        <figure className='pokemon'>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
        </figure>
        <span className='id'>#{pokemon?.id}</span>
        <h2 className='name'>{pokemon?.name}</h2>
        <ul>
          <li className='pokeinfo__weight'><span>Weight: </span><span>{pokemon?.weight}</span></li>
          <li className='pokeinfo__height'><span>Height: </span><span>{pokemon?.height}</span></li>
        </ul>
        <div>
          <article>
            <h3>Type: </h3>
            <ul>
              {
                pokemon?.types.map(type => (
                  <li key={type.type.url}>{type.type.name}</li>
                ))
              }
            </ul>
          </article>
          <article>
            <h3>Skills: </h3>
            <ul>
              {
                pokemon?.abilities.map(skill => (
                  <li key={skill.ability.url}>{skill.ability.name}</li>
                ))
              }
            </ul>
          </article>
        </div>
        <h2 className='stats'>Stats</h2>
        <ul className='pokeinfo__stats'>
          {
            pokemon?.stats.map(stat => (
              <li key = {stat.stat.url}><span>{stat.stat.name}:</span>
              <span className='pokeinfo__number'>{stat.base_stat}</span>
              <div className='stats__bar'><div style= {{width: `${stat.base_stat/1.5}%`}} className='stats__prog'></div></div></li>
            ))
          }
        </ul>
      </div>
      <ul className='movements'>
        <h2>Movements</h2>
        {
          pokemon?.moves.map(move => (
            <li className='list2' key={move.move.url}>{move.move.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Pokeinfo;