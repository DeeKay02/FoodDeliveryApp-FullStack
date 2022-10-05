import { combineReducers } from "redux";

import restaurant from "./Restaurant/restaurant.reducer";

const rootReducer = combineReducers({ restaurant });

export default rootReducer;