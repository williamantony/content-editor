import { combineReducers } from 'redux';

import content from './content.reducer';
import selection from './selection.reducer';

export default combineReducers({
  content,
  selection,
});
