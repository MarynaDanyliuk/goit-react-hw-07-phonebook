import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useState } from 'react';

// import inititalState from 'components/Form/initialState';

import * as api from 'services/serviceApiContacts';
// import * as actions from './contacts-actions';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
  //   {
  //     condition: ({ name }, { getState }) => {
  //       const { contacts } = getState();
  //       const normalizedName = name.toLowerCase();
  //       const result = contacts.items.find(({ name }) => {
  //         return name.toLowerCase() === normalizedName;
  //       });
  //       if (result) {
  //         alert(`${name} is alredy in contacts!`);
  //         // setState({ ...contacts });
  //         return false;
  //       }
  //     },
  //   }
);

// { setState }

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// export const fetchDeleteBook = createAsyncThunk(
//   'books/delete',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.deleteBook(id);
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );

// export const fetchDeleteContact = id => {
//   const func = async (dispatch, getState) => {
//     try {
//       //   const { contacts } = getState();

//       dispatch(actions.fetchDeleteContactLoading());
//       const result = await api.deleteContact(id);
//       dispatch(actions.fetchDeleteContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchDeleteContactError(response.data.messange));
//     }
//   };
//   return func;
// };

// ___________________________________________________________

// export const fetchAddContact = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       //   const { contacts } = getState();
//       //   if (isDublicate(contacts.items, data)) {
//       //     alert(`${data.name} is alredy in contacts!`);

//       //     return false;
//       //   }
//       dispatch(actions.fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(actions.fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactError(response.data.messange));
//     }
//   };
//   return func;
// };
// _________________________________________
// export const fetchAllBooks = createAsyncThunk(
//   'books/fetch-all',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getAllBooks();
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// );

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       // запит пішов
//       dispatch(actions.fetchAllContactsLoading());
//       // якщо відповідь успішна - отримуємо дані
//       const data = await api.getAllContacts();
//       dispatch(actions.fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       // якщо відповідь НЕуспішна - отримуємо помилку
//       dispatch(actions.fetchAllContactsError(response.data.messange));
//     }
//   };
//   return func;
// };

// const isDublicate = (contacts, { name }) => {
//   const normalizedName = name.toLowerCase();
//   const result = contacts.find(({ name }) => {
//     return name.toLowerCase() === normalizedName;
//   });

//   return Boolean(result);
// };
