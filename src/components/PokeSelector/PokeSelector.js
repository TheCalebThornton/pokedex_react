import React from 'react';
import './PokeSelector.css';
import pokeballIcon from 'assets/poke-ball-icon.png';

function getPokemonList () {
  // TODO Utilize Pokemon API...
  return [{name: "bulbasaur"}, {name:"ivysaur"}];
}

class PokeSelector extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemon: getPokemonList(),
      selectedPokemon: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({selectedPokemon: event.target.value});
  }

  render() {
    return (
      <div className="poke-selector">
        <h1 className="poke-selector-header">
          <img className="pokeball-icon" alt="" src={pokeballIcon}></img><span>Pokédex</span>
        </h1>
        <select className="poke-selector-select minimal" data-testid="select" value={ this.state.selectedPokemon } onChange={ this.handleOnChange }>
          {this.state.pokemon.map(({ name }, i) => {
            return <option data-testid="select-option" key={ i } value={ i }>{ name }</option>;
          })}
        </select>
      </div>
    )
  }
}

export default PokeSelector;
