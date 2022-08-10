import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/registerUserConstants";
import axiosInstance from "../api/config";

export const register = (userObj) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.post(
      "/users/registration/",
      {
        email: userObj.email,
        password1: userObj.password,
        password2: userObj.password,
        first_name: userObj.firstName,
        middle_name: userObj.middleName,
        last_name: userObj.lastName,
        phone_number: userObj.phone,
        date_joined: new Date(),
      },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
  } catch (e) {
    if (e.response) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: e.response.data,
      });
    } else {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: e.message,
      });
    }
  }
};
