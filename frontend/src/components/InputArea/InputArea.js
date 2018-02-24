import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEditor, updateInput, getSelectionUpdate } from '../../redux/actions';
import './InputArea.css';

class InputArea extends Component {

  state = {
    content: 'Hello',
    caret: 0
  }
  
  handleBlur = (event) => {
    const { innerHTML } = event.target;
    this.props.updateInput(innerHTML);
  }

  handleMouseUp = (event) => {
    this.props.getSelectionUpdate();
    // Remove empty span tags
    this.props.editor.querySelectorAll('span')
      .forEach(span => {
        if (span.innerHTML === ''){ console.log(span)
          span.parentNode.removeChild(span);}
      });
  }

  handleMouseDown = (event) => {
    if (this.props.editor === null)
      this.props.setEditor(event.target);
  }

  render() {
    return (
      <div className="InputArea" contentEditable={ true } 
        // suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: this.state.content }}
        onBlur={ this.handleBlur }
        onMouseUp={ this.handleMouseUp }
        onMouseDown={ this.handleMouseDown }
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
