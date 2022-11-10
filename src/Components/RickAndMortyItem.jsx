import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IsAlive from './IsAlive';

const RickAndMortyItem = ({rickandmorty}) => {

  const [singleRickMorty, setSingleRickMorty] = useState({});

  useEffect(() => {
    axios.get(`${rickandmorty}`)
      .then(res => setSingleRickMorty(res.data))
  }, [])

  /* console.log(singleRickMorty); */

  return (
    <div className='card-container'>
      <div className='card-data'>
        <div className="card-image">
          <img className='image-detail' src={singleRickMorty.image} alt="imageCharacters" />
        </div>
        <div className="card-description">
          <h3>{singleRickMorty.name}</h3>
          <span>Colorcast</span>
          <p>{singleRickMorty.species}</p>
          <span>Origin</span>
          <p>{singleRickMorty.type === "" ? "No information" : singleRickMorty.type}</p>
          <span>Appearance in episodes</span>
          <p>{singleRickMorty.episode?.length}</p>
          <span>Status</span>
          <p><IsAlive singleRickMorty={singleRickMorty}/></p>
        </div>
      </div>
    </div>
  );
};

export default RickAndMortyItem;