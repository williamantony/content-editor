import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputOptions.css';

class InputOptions extends Component {

  render() {
    return (
      <div className="InputOptions">

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InputOptions);
