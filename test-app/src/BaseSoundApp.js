import React, { Component } from 'react';


class BaseSoundApp extends Component {


  constructor(_id) {
    super();
    this.properties = {
      id : _id
    }
    this.soundParams = {

    }
  }

  noteOn() {

  }

  noteOff() {

  }
  
  render() {
    return (
      <div id={this.properties.id}>
        {this.properties.id}
      <button className="square">
        xxy
      </button>

      </div>
    );
  }
  update (dt) {
    //console.log("update "+this.properties.id);
  }
}

export default BaseSoundApp;
