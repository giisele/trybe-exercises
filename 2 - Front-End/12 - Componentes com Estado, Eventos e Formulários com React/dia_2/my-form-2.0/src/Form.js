import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <div className='fields'>
          <PersonalForm
            changeHandler={ changeHandler }
            onBlurHandler= { onBlurHandler }
            currentState= { currentState }
          />
          <ProfessionalForm changeHandler={ changeHandler } />
        </div>
        <div className='buttons'>
          <input
              type="button"
              className='button'
              onClick={ sendForm }
              value="Enviar"
          />
          <input
            type="reset"
            className='button'
            onClick={ resetForm }
            value="Limpar"
          />
        </div>
      </form>
    );
  }
}

export default Form;