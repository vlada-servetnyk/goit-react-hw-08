import {  createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, editContact, fetchContacts } from "./operations";
import { logOutThunk } from "../auth/operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addContact.pending, (state) => {
             state.loading = true;
        })
        .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logOutThunk.fulfilled, (state) => {
            state.items = [];
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.loading = false;
        })
        .addCase(deleteContact.pending, (state) => {
             state.loading = true;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(editContact.fulfilled, (state, action) => {
            state.items = state.items.map(item => 
            item.id === action.payload.id 
                ? { ...item, ...action.payload } 
                : item 
            );
        });
   
    }
});

export const contactsReducer = slice.reducer;