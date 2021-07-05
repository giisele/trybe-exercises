import React, { Component } from 'react';

import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

import './AboutMe.css';

export default class AboutMe extends Component {
  render() {
    return (
      <section id="about-me">
        <PersonalInfo />
        <Skills />
      </section>
    );
  }
}
