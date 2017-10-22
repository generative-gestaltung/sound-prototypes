import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import StepSeqApp from './StepSeqApp'
import RestApiWrapper from './RestApiWrapper'
//require("webpack")

var _soundApps = [];
var _cnt = 0;


class App extends Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };

    var wrapper = new RestApiWrapper();
    var soundAppsModules = wrapper.getSoundApps();


    this.soundApps = [];

    for (var i in soundAppsModules) {
      var mod = require (""+soundAppsModules[i]);
      var _app =new mod.default("mod"+i);
      this.soundApps.push(_app);
      _soundApps.push(_app);
    }

    setInterval (this.update, 10);
  }



  render() {

    var ret = ["xxx"];
    for (var i in this.soundApps) {
      ret.push(this.soundApps[i].render());
    }

    return ret;
  }

  update() {

    if ((_cnt%300)==0) {
      _soundApps[1].noteOn(20);
    }
    if ((_cnt%300)==200) {
      _soundApps[1].noteOff();
    }
    _cnt += 1;



    //console.log(this.soundApps);
    for (var i in _soundApps) {
      _soundApps[i].update(0.01);
    }
  }
}

export default App;
