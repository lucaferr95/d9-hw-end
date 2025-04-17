import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import favReducer from "../reducers/favReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favourite: favReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
