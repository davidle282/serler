// import { combineReducers } from "redux";
// import authReducer from "./authReducer";
// import homeReducer from "./authReducer";

// export default combineReducers({
//   auth: authReducer,
//   home: homeReducer
// });

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
});

export default rootReducer;
