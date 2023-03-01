import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export type userStateType = {
  preferences:{
    theme: undefined | 'dark' | 'light',
  }
  login:{
    userName: string | undefined;
    token: string | undefined;
  }
}

const initialState: userStateType = {
  preferences:{
    theme: undefined
  },
  login:{
    userName: undefined,
    token: undefined
  }
};


const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.preferences.theme = action.payload;
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

export default reducer;