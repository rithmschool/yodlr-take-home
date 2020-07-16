import { SET_ERROR, RESET_ERROR } from './actionTypes';


function errorsReducer(state = "", action) {
  switch (action.type) {
    case SET_ERROR:
      return action.message;

    case RESET_ERROR:
      return "";

    default:
      return state;
  }
}


export default errorsReducer;