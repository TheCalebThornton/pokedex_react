import React, { useState, useEffect } from 'react';
import './PokeSelector.css';
import pokeballIcon from 'assets/poke-ball-icon.png';
import { getAllGen1Pokemnon } from 'utilities/PokemonAPIClient'

function PokeSelector() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0); // I think i'm gonna need this to pass a value to another component for desc
  useEffect(getPokemonList, []); // useEffect with empty variable list ensures single call per build of component

  function getPokemonList () {
    getAllGen1Pokemnon()
    .then(resp => resp.json())
    .then(data => {
      setPokemonList(data.results);
    })
    .catch(error => console.log(`getPokemonList API Error: ${error}`));
  }

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
        <span> POKEMON INFO HERE: {pokemonList[selectedPokemonIndex]?.name} {pokemonList[selectedPokemonIndex]?.url} </span>
      </div>
    </div>
  )
}

export default PokeSelector;
