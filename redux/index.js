// redux;
// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import counter from "../modules/counter";

// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);
// export default store;

// redux-toolkit
import { configureStore } from "@reduxjs/toolkit";

import counter from "../modules/counterSlice";

const store2 = configureStore({
  reducer: { counter: counter, todos: todos },
});

export default store2;
