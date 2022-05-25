import React from 'react';

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
      <select data-testid="select" value={ this.state.selectedPokemon } onChange={ this.handleOnChange }>
        {this.state.pokemon.map(({ name }, i) => {
          return <option data-testid="select-option" key={ i } value={ i }>{ name }</option>;
        })}
      </select>
    )
  }
}

export default PokeSelector;
