import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FontColor.css';

class FontColor extends Component {

  handleMouseDown = (event) => {
    
    const { selection } = this.props;
    const { baseNode, focusNode } = selection;
    const range = selection.getRangeAt(0);

    if (selection.type !== 'Range') return;

    const nodesList = Array.from(this.props.editor.childNodes);

    const focusNodeIndex = nodesList.indexOf(focusNode.parentNode);
    const baseNodeIndex = nodesList.indexOf(baseNode.parentNode);
    
    const startOffset = (focusNodeIndex > baseNodeIndex) ? baseNodeIndex : focusNodeIndex;
    const endOffset = (focusNodeIndex < baseNodeIndex) ? baseNodeIndex : focusNodeIndex;

    range.setStart(this.props.editor, startOffset);
    range.setEnd(this.props.editor, endOffset + 1);

    const clone = range.cloneContents();
    const fragment = document.createDocumentFragment();
    
    Array.from(clone.childNodes)
      .forEach(child => {

        const { nodeType, nodeValue } = child;

        if (nodeType === 3) {
          
          const node = document.createElement('span');
          const textNode = document.createTextNode(nodeValue);
          
          node.appendChild(textNode);
          node.style.color = event.target.value;
  
          fragment.appendChild(node);
  
        } else {
          
          child.style.color = event.target.value;
          fragment.appendChild(child);

        }

      });


    range.deleteContents();
    
    range.insertNode(fragment);
    selection.collapseToEnd();

  }
  
  render() {
    return ([
      <button
        key='1'
        className="Option Option--FontColor"
        onMouseDown={ this.handleMouseDown }
        value="red"
        >
        red
      </button>,
      
      <button
        key='2'
        className="Option Option--FontColor"
        onMouseDown={ this.handleMouseDown }
        value="blue"
        >
        blue
      </button>
      ]
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(FontColor);
