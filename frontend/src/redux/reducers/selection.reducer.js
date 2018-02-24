import { GET_SELECTION_UPDATE } from '../actions';

export default (selection = null, action) => {
  switch (action.type) {

    case GET_SELECTION_UPDATE:
      return action.payload.selection;
    
    default:
      return selection;

  }
};
