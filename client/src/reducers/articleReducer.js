import {
  FETCH_ARTICLE_DETAIL,
  FETCH_MY_ARTICLES,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
} from "../actions/types";

const initState = {
  data: [],
  myArticles: [],
  detail: {},
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case "home_data_success":
      return {
        ...state,
        data: action.data,
      };
    case "filter_data":
      return {
        ...state,
        data: action.data,
      };
    case FETCH_ARTICLE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case FETCH_MY_ARTICLES:
      return {
        ...state,
        myArticles: action.payload,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        [action.payload.id]: action.payload,
        // myArticles: state.myArticles.filter(
        //   (item) => item.id != action.payload
        // ),
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        // [action.payload.id]: action.payload,
        myArticles: state.myArticles.filter(
          (item) => item.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default articleReducer;
