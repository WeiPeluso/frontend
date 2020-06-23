import { axiosWithAuth } from "../../utils/axiosWithAuth";

//LOGIN

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (user) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("api/auth/login", user)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESSS, payload: res.data.session.user });
    })
    .catch((err) =>
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
    );
};
