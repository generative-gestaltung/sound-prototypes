import React, { Component } from 'react';
import BaseSoundApp from './BaseSoundApp'
import './StepSeqApp.css';

class StepSeqApp extends BaseSoundApp {

  constructor(_id) {
    super(_id);
    this.properties.len = 16;
    this.properties.pos = 0;
  }

  render() {

    var ret = (
      <div id={this.properties.id} class="StepSeqMain">
      Step Sequencer
      <button></button>
      </div>
    );

    return ret;
  }

  componentWillMount() {
    console.log("OK");
  }

  componentDidUpdate() {
  }

  update (dt) {

  }

}

export default StepSeqApp;
