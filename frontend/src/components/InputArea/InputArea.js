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
    content: '<br/>'
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

      const { key, keyCode } = event;

      var valid = 
        (keyCode > 47 && keyCode < 58)   ||
        (keyCode > 64 && keyCode < 91)   ||
        (keyCode > 95 && keyCode < 112)  ||
        (keyCode > 185 && keyCode < 193) ||
        (keyCode > 218 && keyCode < 223);
          
      if (valid && !event.ctrlKey) {
        event.preventDefault();
        
        const { selection } = this.props;
        const range = selection.getRangeAt(0);

        const character = document.createElement('span');
        const textNode = document.createTextNode(key);
        character.appendChild(textNode);
        
        range.deleteContents();

        range.insertNode(character);
        selection.collapseToEnd();

        this.cleanUp();

      }

    }

  }

  cleanUp = () => {
    
    const { selection } = this.props;
    const { baseNode, focusNode } = selection;
    const range = selection.getRangeAt(0);

    if (focusNode !== this.props.editor) {

      console.log(focusNode);

      const nodesList = Array.from(this.props.editor.childNodes);
      const focusNodeIndex = nodesList.indexOf(focusNode);
      
      range.setStart(this.props.editor, focusNodeIndex);
      range.setEnd(this.props.editor, focusNodeIndex + 1);

      const clone = range.cloneContents();
      const fragment = document.createDocumentFragment();

      Array.from(clone.childNodes)
        .forEach(child => {

          Array.from(child.childNodes)
            .forEach(childNode => {

              let node = childNode;

              if (childNode.nodeType === 3) {
                if (childNode.nodeValue !== '') {

                  node = document.createElement('span');
                  node.appendChild(childNode);
                  fragment.appendChild(node);

                }
              }
              
              fragment.appendChild(node);

            });

        });

      range.deleteContents();
      range.insertNode(fragment);
    
    }
    
    selection.collapseToEnd();

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
