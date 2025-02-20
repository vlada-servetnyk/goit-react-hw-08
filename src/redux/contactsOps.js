import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67b6eaad2bddacfb270ccff1.mockapi.io';

export const fetchContacts = createAsyncThunk('/contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get(`/contacts`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


// export const addContact