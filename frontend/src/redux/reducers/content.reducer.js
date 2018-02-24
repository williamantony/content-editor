import { UPDATE_INPUT } from '../actions';

export default (content = 'Hello World', action) => {
  switch (action.type) {

    case UPDATE_INPUT:
      return action.payload.newInput;
    
    default:
      return content;

  }
};
