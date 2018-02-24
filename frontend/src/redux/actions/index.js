export const SET_EDITOR = 'SET_EDITOR';

export const setEditor = (editor) => {

  return {
    type: SET_EDITOR,
    payload: {
      editor
    },
  };

};



export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = (newInput) => {

  const payload = {
    newInput,
  };

  return {
    type: UPDATE_INPUT,
    payload,
  };

};



export const GET_SELECTION_UPDATE = 'GET_SELECTION_UPDATE';

export const getSelectionUpdate = () => {

  const payload = {
    selection: window.getSelection()
  };

  return {
    type: GET_SELECTION_UPDATE,
    payload,
  };

};
