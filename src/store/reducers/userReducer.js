import { LOGIN_START, LOGIN_SUCCESSS, LOGIN_FAILURE } from "../actions";
const initalUser = {
  username: "",
  id: 0,
  department: "",
  students: [],
};
const UserReducer = (state = initalUser, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state };
    case LOGIN_SUCCESSS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        department: action.payload.department,
      };
    case LOGIN_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default UserReducer;
