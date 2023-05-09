'use client'

import React, { useState} from "react";
import ReactCardFlip from "react-card-flip";

const CardPokemon = ({ title, img, weight, height, stats}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCloseButton = (e) => {
    const card = document.querySelectorAll("#card");
    
    card.forEach((item) => {
      item.style.display = "none";
      e.target.style.display = "none";
    });
  }

  const statABuscar = (statName) => {
    const stat = stats.find((stat) => stat.stat.name === statName);

    return stat.base_stat; 
  };



  return (
    <div className="card">
      <button className="card-front__button" onClick={handleCloseButton}>x</button>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-front" id="card" onClick={handleClick}>

          <div className="card-front__image">
            <img
              src={img}
              alt="pokemon" />
          </div>
          <h1 className="card-front__title">{title.charAt(0).toUpperCase() + title.slice(0)}</h1>
          <div className="card-front__stats">
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('speed')}</p>
              <p className="card-front__stats-item-name">SPD</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('special-defense')}</p>
              <p className="card-front__stats-item-name">DEF-S</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('special-attack')}</p>
              <p className="card-front__stats-item-name">ATT-S</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('defense')}</p>
              <p className="card-front__stats-item-name">DEF</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('attack')}</p>
              <p className="card-front__stats-item-name">ATT</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{statABuscar('hp')}</p>
              <p className="card-front__stats-item-name">HP</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{height}</p>
              <p className="card-front__stats-item-name">HEIGHT</p>
            </div>
            <div className="card-front__stats-item">
              <p className="card-front__stats-item-value">{weight}</p>
              <p className="card-front__stats-item-name">WEIGHT</p>
            </div>
          </div>
        </div>

        <div className="card-back" onClick={handleClick} id="card">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_1024,h_1420/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA" alt='la evita' />
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default CardPokemon;
