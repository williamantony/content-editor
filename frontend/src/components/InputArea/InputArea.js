import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputArea.css';

class InputArea extends Component {

  render() {
    return (
      <div className="InputArea" contentEditable={ true } >
        
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
