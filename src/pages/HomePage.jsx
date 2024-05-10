import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homepage.css';
import logo from './styles/pokedex.png';

const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
  }

  return (
    <>
    <section className='home h-100'>
      <div className="container">
        <div className='logo__container'>
          <img className='logo__poke' src= {logo} alt="" />
        </div>
        <h1 className='homepage__title'>¡Hi Trainer!</h1>
        <h2 className='homepage__title2'>To start, give me your name</h2>
        <form className='start' onSubmit={handleSubmit}>
          <input className='input' ref={textInput} type="text" />
          <button className='btn'>Start</button>
        </form>
      </div>
      <div className='lines__container'>
      <div className='red__line f-v j-c a-e
      '> 
        <div className='circle1'>
          <div className='circle2'></div>
        </div>
      </div>
      <div className='black__line'></div>
      </div>
    </section>
    </>
  )
}

export default HomePage;
