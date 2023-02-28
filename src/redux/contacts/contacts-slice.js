import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
} from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    [fetchAllContactsLoading]: store => {
      store.isLoading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },

    [fetchAddContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

console.log(contactsSlice);

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// ___________________________________________________________
// reducers: {
//   addContact: {
//     reducer: (state, { payload }) => {
//       state.push(payload);
//     },
//     prepare: data => {
//       return {
//         payload: {
//           id: nanoid(),
//           ...data,
//         },
//       };
//     },
//   },
//   deleteContact: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// },
