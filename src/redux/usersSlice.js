import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        return res.data;
    });
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
    },
});

export default usersSlice.reducer;