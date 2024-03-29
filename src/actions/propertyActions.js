import {
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
} from "../constants/propertyConstants";
import axiosInstance from "../api/config";

export const listProperties = () => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_LIST_REQUEST });
    const response = await axiosInstance.get("/api/properties");
    const data = await response.data;
    dispatch({
      type: PROPERTY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload: error.response.data.detail || error.message,
    });
  }
  console.log("dispatched");
};
