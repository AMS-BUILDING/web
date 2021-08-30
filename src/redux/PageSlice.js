import { createSlice } from '@reduxjs/toolkit';

let DEFAULT_STATE = JSON.parse(localStorage.getItem("page"))
export const pageSlice = createSlice({
    name: "page",
    initialState: (DEFAULT_STATE == null) ? "home" : DEFAULT_STATE,
    reducers: {
        setPageRedux: (state, action) => {
            state = action.payload;
            localStorage.setItem("page", JSON.stringify(state));
            return state;
        }
    }
})

export const { setPageRedux } = pageSlice.actions;
export default pageSlice.reducer;