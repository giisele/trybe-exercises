import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick = () => {
    console.log((this.state.numeroDeCliques % 2 === 1) ? 'green' : '#EFEFEF')
    this.setState(({ numeroDeCliques }) => ({
      numeroDeCliques: numeroDeCliques + 1
    }))
  }

  handleClick2 = () => {
    this.setState(({ numeroDeCliques2 }) => ({
      numeroDeCliques2: numeroDeCliques2 + 1
    }))
  }

  handleClick3 = () => {
    this.setState(({ numeroDeCliques3 }) => ({
      numeroDeCliques3: numeroDeCliques3 + 1,
    }));
  }

  // Para fixar
  // Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
  // A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
  // 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

  render() {
    return (
    <div>
      <button style={{ backgroundColor: (this.state.numeroDeCliques % 2 === 0) ? (this.state.numeroDeCliques === 0 ? 'yellow' : 'lightgreen') : '#EFEFEF' }} onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      {/* Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! */}
      <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
      <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
    </div>
    )}
}

export default App;