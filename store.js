import { configureStore } from '@reduxjs/toolkit'
import setLanguageReducer from "./redux/reducers/setLanguageReducer";

export const store = configureStore({
  reducer: {
    language: setLanguageReducer,
  },
})