import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useRickAndMorty from '../hooks/useRickAndMorty';
import RickAndMortyItem from './RickAndMortyItem';
import bannerRickAndMorty from '../assets/image/bannerRickAndMorty5.png'

const RickAndMorty = () => {
  const {showRickMorty, setId, id, searching} = useRickAndMorty();

  return (
    <div>
      <div className="banner-container">
        <img className='bannerRickAndMorty' src={bannerRickAndMorty} alt="bannerRickAndMorty" />
      </div>
      <div className="input-search">
        <input type="text" placeholder="Write location id (1 - 126)" value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={searching}>Search</button>
      </div>
      <div className="data-center">
        <div className="data-container">
          <div className="data-name">
            <p>Name:</p>
            <p>{showRickMorty.name}</p>
          </div>
          <div className="data-type">
            <p>Type:</p>
            <p>{showRickMorty.type}</p>
          </div>
          <div className="data-dimension">
            <p>Dimension:</p>
            <p>{showRickMorty.dimension}</p>
          </div>
          <div className="data-poblation">
            <p>Poblation:</p>
            <p>{showRickMorty.residents?.length}</p>
          </div>
        </div>
      </div>
      <div className="card-center">
        <ul className="cards-list">
          {showRickMorty.residents?.map((rickandmorty) => (
            <RickAndMortyItem key={rickandmorty} rickandmorty={rickandmorty}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RickAndMorty;