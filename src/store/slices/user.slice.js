import { createSlice } from "@reduxjs/toolkit";
const emptyState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  isLogged: false,
};
const initialStateLocalStorage = JSON.parse(localStorage.getItem("userData"));
const userSlice = createSlice({
  name: "user",
  initialState: initialStateLocalStorage || emptyState,
  reducers: {
    updateUser(state, action) {
      const newUserData = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.id = newUserData.id;
      stateLocalStorage.id = newUserData.id;
      state.firstName = newUserData.firstName;
      stateLocalStorage.firstName = newUserData.firstName;
      state.lastName = newUserData.lastName;
      stateLocalStorage.lastName = newUserData.lastName;
      state.email = newUserData.email;
      stateLocalStorage.email = newUserData.email;
      localStorage.removeItem("userData");
      localStorage.setItem("userData", JSON.stringify(state));
    },

    updateToken(state, action) {
      const stateLocalStorage = structuredClone({ ...state });
      const newToken = action.payload;
      state.token = newToken;
      localStorage.removeItem("userData");

      localStorage.setItem("userData", JSON.stringify(state));
    },
    logIn(state) {
      const stateLocalStorage = structuredClone({ ...state });
      state.isLogged = true;
      localStorage.removeItem("userData");
      localStorage.setItem("userData", JSON.stringify(state));
    },

    reset() {
      localStorage.removeItem("userData");
      return emptyState;
    },
  },
});
export const { updateUser, updateToken, logIn, reset } = userSlice.actions;
export default userSlice.reducer;
