import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Editor.css';

class Editor extends Component {

  render() {
    return (
      <div className="Editor">
      Editor
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
