import React, { useState, useEffect } from 'react';
import './PokeSelector.css';
import pokeballIcon from 'assets/poke-ball-icon.png';
import { getAllGen1Pokemnon } from 'utilities/PokemonAPIClient'
import PokeDetails from 'components/PokeDetails/PokeDetails';

function PokeSelector() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0); // I think i'm gonna need this to pass a value to another component for desc

  function getPokemonList () {
    getAllGen1Pokemnon()
    .then(resp => resp.json())
    .then(data => {
      setPokemonList(data.results);
    })
    .catch(error => console.log(`getPokemonList API Error: ${error}`));
  }

  useEffect(getPokemonList, []); // useEffect with empty variable list ensures single call per build of component

  const handleOnChange = (event) => {
    setSelectedPokemonIndex(event.target.value);
  }

  return (
    <div className="poke-selector">
      <h1 className="poke-selector-header">
        <img className="pokeball-icon" alt="" src={pokeballIcon}></img><span>Pokédex</span>
      </h1>
      <select className="poke-selector-select minimal" data-testid="select" value={ selectedPokemonIndex } onChange={ handleOnChange }>
        {pokemonList.map((item, i) => {
          return <option data-testid="select-option" key={ i } value={ i }>{ item.name }</option>;
        })}
      </select>
      <div>
        <PokeDetails />
      </div>
    </div>
  )
}

export default PokeSelector;
