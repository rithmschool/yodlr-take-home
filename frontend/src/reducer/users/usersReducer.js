import {
  LOAD_USERS_TO_STORE, ADD_USER_TO_STORE, REMOVE_USER_FROM_STORE
} from './actionTypes';


function usersReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_USERS_TO_STORE:
      const users = action.users;
      return users.reduce((table, user) => {
        table[user.id] = user;
        return table;
      }, {});

    case ADD_USER_TO_STORE:
      return { ...state, [action.user.id]: action.user };

    case REMOVE_USER_FROM_STORE:
      const data = { ...state };
      delete data[action.id];
      return data;

    default:
      return state;
  }
}


export default usersReducer;