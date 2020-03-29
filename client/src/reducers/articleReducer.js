import _ from "lodash";
import {
  CREATE_ARTICLE,
  FETCH_MYARTICLES,
  FETCH_ARTICLE,
  DELETE_ARTICLE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_MYARTICLES:
      return action.payload;
    case FETCH_ARTICLE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ARTICLE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
