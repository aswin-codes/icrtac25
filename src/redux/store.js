import { configureStore } from '@reduxjs/toolkit'
import currentTabReducer from "./features/currentTab"

export const store = configureStore({
  reducer: {
    currentTab: currentTabReducer
  },
})