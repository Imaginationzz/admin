import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        token: null
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.token = action.payload.accessToken;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
            state.token = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;