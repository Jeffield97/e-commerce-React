import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";

const store = configureStore({ reducer: { user } });
export default store;
