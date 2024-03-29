import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { propertyListReducer } from "./reducers/propertyReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
const reducer = combineReducers({
  propertyList: propertyListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
