// Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes: nome do pokemon; tipo do pokemon; peso médio do pokemon, acompanhado da unidade de medida usada; imagem do pokemon.
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name}`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
