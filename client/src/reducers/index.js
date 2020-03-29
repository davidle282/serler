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
import userReducer from "./userReducer";
import { reducer as formReducer } from "redux-form";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  users: userReducer,
  form: formReducer,
  home: homeReducer
});

export default rootReducer;
