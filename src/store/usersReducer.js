const defaultState = {
  users: []
}

const GET_USERS = "GET_USERS";
const REMOVE_USER = "REMOVE_USER";
export const ASYNC_USERS = "ASYNC_USERS";

export const usersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {...state, users: action.payload}
    case REMOVE_USER:
      return {...state, users: state.users.filter(user => user.id !== action.payload )}
    default:
      return state
  }
}

export const usersCreator = (payload) => ({type: GET_USERS, payload});
export const removeUsersCreator = (payload) => ({type: REMOVE_USER, payload});
export const asyncUsersCreator = () => ({type: ASYNC_USERS});