import React, { Component } from 'react';
import './OptionsBar.css';
import FontColor from './components/Font/FontColor/FontColor';


class OptionsBar extends Component {

  render() {
    return (
      <div className="OptionsBar">
        <FontColor />
      </div>
    );
  }

}

export default OptionsBar;
