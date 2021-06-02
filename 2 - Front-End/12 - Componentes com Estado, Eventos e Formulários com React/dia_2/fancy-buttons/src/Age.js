import React, { Component } from 'react'

class Age extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        type="number"
        name="idade"
        placeholder="Idade"
        onChange={handleChange}
      />
    )
  }
}

export default Age;