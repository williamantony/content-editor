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
  
  handleBlur = (event) => {
    const { innerHTML } = event.target;
    this.props.updateInput(innerHTML);
  }

  handleMouseUp = (event) => {
    this.props.getSelectionUpdate();
  }

  handleMouseDown = (event) => {
    if (this.props.editor === null)
      this.props.setEditor(event.target);
  }

  handleKeyDown = (event) => {

    // console.log(event.keyCode);
    
    const keysWithRules = [9, 13, 18, 27, 32];

    if (keysWithRules.includes(event.keyCode))
      event.preventDefault();

    if (event.keyCode === 9) {
      // Tab
      const { selection } = this.props;
      const range = selection.getRangeAt(0);
      const tabSpace = document.createElement('tab');
      tabSpace.innerHTML = '&emsp;';
      range.insertNode(tabSpace);
      selection.collapseToEnd();
    }

    else if (event.keyCode === 13) {
      // Enter
      const { selection } = this.props;
      const range = selection.getRangeAt(0);
      const breakTag = document.createElement('br');
      range.insertNode(breakTag);
      selection.collapseToEnd();
    }

    else if (event.keyCode === 18) {
      // Alt
      
    }

    else if (event.keyCode === 27) {
      // Esc
      this.props.editor.blur();
    }

    else if (event.keyCode === 32) {
      // SpaceBar
      const { selection } = this.props;
      const range = selection.getRangeAt(0);
      const space = document.createElement('space');
      space.innerHTML = '&nbsp;';
      range.insertNode(space);
      selection.collapseToEnd();
    }

    else {

      // Other Keys Goes Here

    }

  }
  
  componentDidMount() {

    this.props.getSelectionUpdate();

  }

  render() {
    return (
      <div className="InputArea" contentEditable={ true } 
        // suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: this.state.content }}
        onBlur={ this.handleBlur }
        onMouseUp={ this.handleMouseUp }
        onMouseDown={ this.handleMouseDown }
        onKeyDown={ this.handleKeyDown }
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
  getSelectionUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
