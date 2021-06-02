import React, { Component } from 'react'
import Age from './Age'
import EstadoFavorito from './EstadoFavorito'
import './Forms.css'

class Forms extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      formularioComErros: false
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</legend>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} erros={this.formularioComErros} />
          <Age handleChange={this.handleChange} />
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.handleChange}
          />
        </form>
      </fieldset>
    );
  }
}

export default Forms;