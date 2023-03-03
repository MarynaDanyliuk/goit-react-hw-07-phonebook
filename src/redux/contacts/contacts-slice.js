import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

// import {
//   fetchAllContactsLoading,
//   fetchAllContactsSuccess,
//   fetchAllContactsError,
//   fetchAddContactLoading,
//   fetchAddContactSuccess,
//   fetchAddContactError,
//   fetchDeleteContactLoading,
//   fetchDeleteContactSuccess,
//   fetchDeleteContactError,
// } from './contacts-actions';

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
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
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
