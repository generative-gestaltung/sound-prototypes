import React, { Component } from 'react';

class RestApiWrapper extends Component {

  constructor() {
    super();
  }

  getSoundApps() {
    return [
      "./StepSeqApp",
      "./FMSynth"
    ];
  }
}

export default RestApiWrapper;
