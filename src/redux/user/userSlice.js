import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestDomainStatus } from '../../api/requests';

export const fetchDomainStatus = createAsyncThunk(
    'user/fetchDomainStatus',
    requestDomainStatus,
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        tech: 'notAttempted',
        management: 'notAttempted',
        design: 'notAttempted',
        video: 'notAttempted',
    },
    extraReducers: {
        [fetchDomainStatus.fulfilled]: (state, action) => {
            if (action.error) {
                return;
            }
            const {
                success, tech, design, management, video,
            } = action.payload;
            if (success) {
                state.tech = tech;
                state.design = design;
                state.management = management;
                state.video = video;
            }
        },
    },
    reducers: {
        startAttempt: (state, action) => {
            state[action.payload] = 'inProgress';
        },
        endAttempt: (state, action) => {
            state[action.payload] = 'attempted';
        },
    },
});

export const { startAttempt, endAttempt } = userSlice.actions;

export default userSlice.reducer;
