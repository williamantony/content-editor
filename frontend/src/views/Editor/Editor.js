import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Editor.css';
import ScreenView from '../../components/ScreenView/ScreenView';
import InputArea from '../../components/InputArea/InputArea';
import OptionsBar from '../../components/OptionsBar/OptionsBar';

class Editor extends Component {

  render() {
    return (
      <ScreenView>
        <OptionsBar />
        <InputArea />
      </ScreenView>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
