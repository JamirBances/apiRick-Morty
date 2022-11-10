import React from 'react';

const IsAlive = ({ singleRickMorty }) => {
  if (singleRickMorty.status === "Alive") {
    return(
      <>
        <div className="status-container">
          <div className="circle" style={{backgroundColor: "#00D26A"}}></div>
          <p>{singleRickMorty.status}</p>
        </div>
      </>
    )
  }else if (singleRickMorty.status === "Dead") {
    return(
      <>
        <div className="status-container">
          <div className="circle" style={{backgroundColor: "red"}}></div>
          <p>{singleRickMorty.status}</p>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className="status-container">
          <i className="fa-solid fa-question"></i>
          <p>{singleRickMorty.status}</p>
        </div>
      </>
    )
  }
};

export default IsAlive;