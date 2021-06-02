import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    // Desestruturamos nossas props e trazemos elas dentro das tags HTML,
    // para que sejam renderizadas.
    const { person: { name, email, age, image } } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

export default PersonCard;