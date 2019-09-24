import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import GET_PR_LIST from '../constants/prActionTypes';

const initState = {
  list: [],
};


const prTrackerReducer = handleActions({
  [GET_PR_LIST]: (state, action) => ({
    ...state,
    list: [...action.payload],

  }),
}, {
  ...initState,
});

const rootReducer = combineReducers({
  prTrackerReducer,
});


export default rootReducer;
