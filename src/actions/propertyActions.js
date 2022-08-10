import {
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_ADD_REQUEST,
  PROPERTY_ADD_SUCCESS,
} from "../constants/propertyConstants";
import axiosInstance from "../api/config";
import axios from "axios";

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

export const addProperty = (propertyObject, userToken) => async (dispatch) => {
  try {
    dispatch({ type: PROPERTY_ADD_REQUEST });
    const config = {
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userToken}`,
      },
    };
    const response = await axios.post(
      "http://localhost:8000/api/properties/add/",
      propertyObject,
      config
    );
    const data = await response.data;
    console.log(data);
    dispatch({
      type: PROPERTY_ADD_SUCCESS,
      payload: data,
    });
  } catch (e) {
    if (e.response) {
      dispatch({ type: PROPERTY_ADD_FAIL, payload: e.response.data });
    }
  }
};
