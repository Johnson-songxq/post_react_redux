import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

const rootReducer = {
  posts: postsReducer,
};
//for others, it can be counterReducer
export const store = configureStore({
  reducer: rootReducer,
});

// export default store;
