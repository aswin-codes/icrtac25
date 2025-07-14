import { createSlice } from '@reduxjs/toolkit'


export const currentTabSlice = createSlice({
  name: 'currentTab',
  initialState : {
    currentTab: 'home'
  },
  reducers: {
    setCurrentTab : (state,action) => {
        state.currentTab = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentTab } = currentTabSlice.actions

export default currentTabSlice.reducer