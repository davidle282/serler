import { FETCH_USER } from "../actions/types";
const initialState = {
  user: {},
};
export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload || false,
      };
    default:
      return state;
  }
}
