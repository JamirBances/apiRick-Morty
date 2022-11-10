import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useRickAndMorty = () => {

  const [showRickMorty, setShowRickMorty] = useState  ({});
  const [id, setId] = useState("");

  useEffect(() => {
    let randomId = Math.floor(Math.random()*126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setShowRickMorty(res.data))
  }, [])

  console.log(showRickMorty);

  const searching = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setShowRickMorty(res.data))
  };
  return {showRickMorty, setId, id, searching}
};

export default useRickAndMorty;