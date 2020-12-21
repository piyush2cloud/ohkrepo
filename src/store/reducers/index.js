import { combineReducers } from "redux";

import homeReducer from "./home/homeReducer";
import detailReducer from "./Detail/detailReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  detail:detailReducer
});

export default rootReducer;
