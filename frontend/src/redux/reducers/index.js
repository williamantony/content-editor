import { combineReducers } from 'redux';

import editor from './editor.reducer';
import content from './content.reducer';
import selection from './selection.reducer';

export default combineReducers({
  editor,
  content,
  selection,
});
