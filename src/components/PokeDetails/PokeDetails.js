import React, { useState, useEffect } from 'react';
import './PokeDetails.css';

function PokeDetails() {
  const [pokemon, setPokemon] = useState({});

  return (
    <div className="poke-details">
      <h1 className="poke-details-header">
        POKEMON NAME
      </h1>
      <div className="poke-about-block">
        <h2>About</h2>
        <div className="poke-flavor-info">
          <div className="poke-dimensions">
            <div className="weight">10 kg</div>
            <div className="height">37 cm</div>
            <div className="abilities">Blaze, Torrent</div>
          </div>
          <span>POKEMON FLAVOR TEXT GOES HERE</span>
        </div>
        <div className="poke-base-stats">
          <h2>Base Stats</h2>
          <ul>
            <li>
              <span className="stat-title">HP</span>
              <span className="state-value">40</span>
              <progress max="500" value="40"></progress>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokeDetails;
