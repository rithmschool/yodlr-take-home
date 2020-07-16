import {
  LOAD_USERS_TO_STORE, ADD_USER_TO_STORE, REMOVE_USER_FROM_STORE
} from './actionTypes';
import User from '../../api/User';
import { setError, resetError } from '../errors/action';


function storeUser(user) {
  return { type: ADD_USER_TO_STORE, user };
}

/**
 * Send post request to backend and add new user to redux store.
 * @param {Object} user - { email, firstName, lastName, state }
 */
function addUser(user) {
  return async function(dispatch) {
    dispatch(resetError());

    try {
      const newUser = await User.create(user);
      dispatch(storeUser(newUser));
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }
}

function removeUserFromStore(id) {
  return { type: REMOVE_USER_FROM_STORE, id };
}

/**
 * Sends DELETE request to backend and remove user from redux store.
 * @param {Number} id 
 */
function removeUser(id) {
  return async function(dispatch) {
    dispatch(resetError());

    try {
      await User.remove(id);
      dispatch(removeUserFromStore(id));
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    }
  }
}

function loadUsersToStore(users) {
  return { type: LOAD_USERS_TO_STORE, users };
}

/**
 * Sends GET request to backend and loads users to redux store.
 */
function loadUsers() {
  return async function(dispatch) {
    dispatch(resetError());

    try {
      const users = await User.getAll();
      dispatch(loadUsersToStore(users));
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
    }
  }
}


export { addUser, removeUser, loadUsers };