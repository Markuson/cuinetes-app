import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import preferences from "./slices/preferences";

const rootReducer = combineReducers({
  preferences,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['preferences'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

const makeStore = () => store;

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export const storeWrapper = createWrapper(makeStore);
export const persistor = persistStore(store)
