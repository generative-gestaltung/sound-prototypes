import React, { Component } from 'react';
import BaseSoundApp from './BaseSoundApp'
import './FMSynth.css';
import params from './FMParams.js'

var _NVOICES = 6;
var _NOPERATORS = 6;


class Envelope extends Component {

  constructor() {
    
    this.a = 0;
    this.d = 0.1;
    this.s = 0;
    this.r = 0;

    this.value = 0;
    this.progres = 0;
    this.on = false;
  }

  trigger() {
    this.progress = 0;
    this.on = true;
  }

  release() {
    this.on = false;
  }

  update(dt) {
    if (this.progress < this.a + this.d || !this.on)
      this.progress += dt;

    if (this.progress < this.a) {
      this.value = this.progress / this.a;
    }
    if (this.progress >= this.a && this.progress < (this.a+this.d)) {
      this.value = (1 - ((this.progress-this.a) / this.d)) / this.s + this.s;
    }
    if (this.progress > (this.a+this.d)) {
      this.value = this.s * (1-(this.progress-this.a-this.d) / (this.r))
    }
    if (this.value<0) this.value = 0;
  }
}


class Operator extends Component {

  contructor (params) {
    //super();
    this.params = params;
    this.val = 0;
    this.phase = 0;
    this.env = new Envelope();
  }

  update(dt) {
    this.phase += dt;
    this.env.update(dt);
    this.val = Math.sin(this.phase*this.params.freq) * this.env.value;
    console.log(this.env.value);
  }

  trigger() {
    this.env.trigger();
  }

  release() {
    this.env.release();
  }
}

class Voice extends Component{

  contructor () {

    //console.log("new voice");

    /*
    this.operators = [];
    this.isOn = false;
    this.key = 0;

    for (var i=0; i<_NOPERATORS; i++) {
      this.operators.push(new Operator());
    }
    console.log(this.operators);
    */
  }

  noteOn () {

    this.isOn = true;
    for (var i=0; i<_NOPERATORS; i++) {
      //this.operators[i].trigger();
    }
  }

  noteOff () {
    this.isOn = false;
    for (var i=0; i<_NOPERATORS; i++) {
      //this.operators[i].release();
    }
  }

  update(dt) {

  }
}

class FMSynth extends BaseSoundApp {

  constructor(_id) {
    super(_id);
    this.params = params;
    this.time = 0;

    this.voices = [];
    for (var i=0; i<_NVOICES; i++) {
      this.voices.push (new Voice());
    }
  }

  render() {
    return (
      <div id={this.properties.id} class="FMSynthMain">
      FM Synth
      <button>
        {this.properties.id}
      </button>

      </div>
    );
  }

  noteOn (key) {
    this.voices[0].noteOn();
  }

  noteOff() {
    this.voices[0].noteOff();
  }


  update (dt) {
    for (var i in this.voices) {
      this.voices[i].noteOn();
    }
  }
}

export default FMSynth;
