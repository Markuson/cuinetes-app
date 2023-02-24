import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export type PreferencesStateType = {
    theme: undefined | 'dark' | 'light',
}

const initialState: PreferencesStateType = {
  theme: undefined,
};


const { actions, reducer: preferences } = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.preferences,
      };
    },
  },
});


export const { setTheme } = actions;

export default preferences;