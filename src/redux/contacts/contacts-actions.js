import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const fetchAddContactLoading = createAction('contacts/add/loading');
export const fetchAddContactSuccess = createAction('contacts/add/success');
export const fetchAddContactError = createAction('contacts/add/error');

// _____________redux______________________
// import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// export const addContact = createAction('contacts/add', data => {
//   return {
//     payload: {
//       ...data,
//       id: nanoid(),
//     },
//   };
// });

// export const deleteContact = createAction('contacts/delete');
