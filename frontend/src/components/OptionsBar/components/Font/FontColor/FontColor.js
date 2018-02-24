import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../../../../../redux/actions';
import './FontColor.css';

class FontColor extends Component {

  handleMouseDown = (event) => {
    
    const { selection } = this.props;

    if (selection !== null) {
      if (selection.type === 'Range') {

        const range = selection.getRangeAt(0);
        const span = document.createElement('span');

        span.textContent = selection.toString();
        span.style.color = 'red';
        
        range.deleteContents();
        range.insertNode(span);
        
      }
    }

  }

  // handleMouseUp = (event) => {

  //   const { editor } = this.props;
  //   this.props.updateInput(editor.innerHTML);

  // }

  render() {
    return (
      <button
        className="Option Option--FontColor"
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        >
        Color
      </button>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(FontColor);
