import { SET_ERROR, RESET_ERROR } from './actionTypes';


function setError(message) {
  return { type: SET_ERROR, message };
}

function resetError() {
  return { type: RESET_ERROR };
}


export { setError, resetError };