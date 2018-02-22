import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreenView from '../../components/ScreenView/ScreenView';
import './Editor.css';

class Editor extends Component {

  render() {
    return (
      <ScreenView>
        Editor
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
