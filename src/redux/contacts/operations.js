import { createAsyncThunk } from "@reduxjs/toolkit";
import {api, setAuthHeader} from '../auth/operations'


export const fetchContacts = createAsyncThunk('/contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token;
        if (token) {
            setAuthHeader(token);
        }
        const { data } = await api.get(`/contacts`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token;
        if (token) {
            setAuthHeader(token);
        }
        const { data } = await api.post(`/contacts`, body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token;
        if (token) {
            setAuthHeader(token);
        }
        await api.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        setAuthHeader(token);
      }
      const { data } = await api.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);