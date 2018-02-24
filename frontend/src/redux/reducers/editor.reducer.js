import { SET_EDITOR } from '../actions';

export default (editor = null, action) => {
  switch (action.type) {

    case SET_EDITOR:
      return action.payload.editor;
    
    default:
      return editor;

  }
};
