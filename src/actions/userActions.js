import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import axiosInstance from "../api/config";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axiosInstance.post(
      "/users/login/",
      {
        email: email,
        password: password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (e) {
    if (e.response) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: e.response.data.non_field_errors[0],
      });
    }
  }
};
