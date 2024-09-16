import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import incidentReducer from "../slices/incidentSlice";
import searchReducer from "../../features/search/searchSlice"
import { ProfileReducer } from "../../app/(tabs)/Profile/profileSlice";

export const store = configureStore({
  reducer: {
    userData: authReducer,
    incidentData: incidentReducer,
    search: searchReducer,
    Profile: ProfileReducer,
  },
});
