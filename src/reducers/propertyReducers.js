import {
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
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
