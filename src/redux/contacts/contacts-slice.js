import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContactsSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContactsError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContactLoading, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

console.log(contactsSlice);

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// console.log(payload);

// reducers: {},
// extraReducers: {
// [fetchAllContactsLoading]: store => {
//   store.isLoading = true;
// },
// [fetchAllContactsSuccess]: (store, { payload }) => {
//   // console.log(payload);
//   store.isLoading = false;
//   store.items = payload;
// },
// [fetchAllContactsError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;
// },

// [fetchAddContactLoading]: store => {
//   store.isLoading = true;
// },
// [fetchAddContactSuccess]: (store, { payload }) => {
//   store.isLoading = false;
//   store.items.push(payload);
// },
// [fetchAddContactError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;
// },
// [fetchDeleteContactLoading]: store => {
//   store.isLoading = true;
// },
// [fetchDeleteContactSuccess]: (store, { payload }) => {
//   store.isLoading = false;
//   const index = store.items.findIndex(item => item.id === payload);
//   store.items.splice(index, 1);
// },
// [fetchDeleteContactError]: (store, { payload }) => {
//   store.isLoading = false;
//   store.error = payload;
// },
// }

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
