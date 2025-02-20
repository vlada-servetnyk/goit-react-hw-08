import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts} from "./contactsOps";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchContacts.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;