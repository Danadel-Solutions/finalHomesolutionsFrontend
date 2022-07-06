import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/registerUserConstants";
import axios from "axios";

export const register = (userObj) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/users/registration/",
      {
        email: userObj.email,
        password1: userObj.password,
        password2: userObj.password,
        first_name: userObj.firstName,
        middle_name: userObj.middleName,
        last_name: userObj.lastName,
        phone_number: userObj.phone,
      },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (e) {
    if (e.response) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: e.response.data.non_field_errors[0],
      });
    }
  }
};
