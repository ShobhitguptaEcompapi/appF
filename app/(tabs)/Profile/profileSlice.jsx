import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { fetchProfile } from "./profileApi";
// import { createSelector } from 'reselect';

export const fetchProfileThunk = createAsyncThunk(
    'fetchProfile/Thunk',
    async () => {
        console.log("=============dispatch thunk============")
        const response = await fetchProfile();
        return response.data;
    }
);

const profileSlice = createSlice({
    name: "Profile",
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    reducers: {
        resetProfile(state) {
            state.data = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfileThunk.fulfilled, (state, action) => {
                state.loading = false;
                console.log("===fulfilled===", action.payload)
                state.data = action.payload;
            })
            .addCase(fetchProfileThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch student profile";
            });
    },
});

export const { resetProfile } = profileSlice.actions;

export const getItems = (state) => state.Profile.data;
export const getItemsError = (state) => state.Profile.error;
export const profileLpoading = (state) => state.Profile.loading;

export const ProfileReducer = profileSlice.reducer;



