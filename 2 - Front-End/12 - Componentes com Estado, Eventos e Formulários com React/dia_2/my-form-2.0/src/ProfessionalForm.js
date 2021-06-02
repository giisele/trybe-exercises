import React, { Component } from 'react';

class ProfessionalFormForm extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais</legend>
        <div className="container">
          Resumo do currículo:
          <textarea
            name="resume"
            maxLength="1000"
            cols="30" rows="15"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
            <textarea
              name="role"
              maxLength="40"
              cols="30" rows="2"
              required
              onChange={changeHandler}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name="roleDescription"
            maxLength="500"
            cols="30" rows="4"
            onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalFormForm;
