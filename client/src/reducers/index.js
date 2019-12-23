// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import homeReducer from "./authReducer";

// export default combineReducers({
//   auth: authReducer,
//   home: homeReducer
// });

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
});

export default rootReducer;
