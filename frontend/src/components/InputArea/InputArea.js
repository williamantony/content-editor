import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  setEditor, 
  updateInput, 
  getSelectionUpdate 
} from '../../redux/actions';
import './InputArea.css';

class InputArea extends Component {

  state = {
    content: ''
  }
  
  handleKeyDown = (event) => {

    const { key, keyCode } = event;

    const keysWithRules = [9, 27];

    console.log(keyCode, key);

    if (keysWithRules.includes(keyCode))
      event.preventDefault();

    if (keyCode === 9) {
      // Tab      
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.innerHTML = '&emsp;';

      range.insertNode(span);
      selection.collapseToEnd();
    }

    else if (keyCode === 27) {
      // ESC
      this.props.editor.blur();
    }

  }

  handleKeyUp = (event) => {

    const { innerHTML } = event.target;
    this.props.updateInput(innerHTML);

  }

  handleMouseDown = (event) => {

    const editor = event.target;
    this.props.setEditor(editor);

  }

  render() {
    return (
      <div className="InputArea" contentEditable={ true }
        dangerouslySetInnerHTML={{ __html: this.state.content }}
        onKeyDown={ this.handleKeyDown }
        onMouseDown={ this.handleMouseDown }
        onKeyUp={ this.handleKeyUp }
        >
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setEditor,
  updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
