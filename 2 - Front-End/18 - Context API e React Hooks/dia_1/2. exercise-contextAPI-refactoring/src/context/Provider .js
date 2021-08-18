import React, { Component } from 'react';
import CarsContext from './CarsContext';

class Provider  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        blue: false,
        red: false,
        yellow: false,
      },
      signal: { color: 'red' },
    }
  }

  moveCar = (car, side) => {
    this.setState({ cars: { ...this.state.cars, [car]: side } })
  }

  changeSignal = (signalColor) => {
    this.setState({ signal: { ...this.state.signal, color: signalColor } })
  }
  render() {
    const {moveCar, changeSignal, state} = this;
    const context = { ...state, moveCar, changeSignal };
    return (
      <div>
        <CarsContext.Provider value={context}>
          {this.props.children}
        </CarsContext.Provider>
      </div>
    );
  }
}

export default Provider ;