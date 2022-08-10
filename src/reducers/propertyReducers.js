import {
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_ADD_REQUEST,
  PROPERTY_ADD_SUCCESS,
} from "../constants/propertyConstants";

export const propertyListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { loading: true, properties: [] };
    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload };
    case PROPERTY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const propertyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_ADD_REQUEST:
      return { loading: true };
    case PROPERTY_ADD_SUCCESS:
      return { loading: false, property: action.payload, success: true };
    case PROPERTY_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
