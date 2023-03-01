import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
  // extraReducers: {
  //   [fetchAllContactsLoading]: store => {
  //     store.isLoading = true;
  //   },
  //   [fetchAllContactsSuccess]: (store, { payload }) => {
  //     console.log(payload);
  //     store.isLoading = false;
  //     store.items = payload;
  //   },
  //   [fetchAllContactsError]: (store, { payload }) => {
  //     store.isLoading = false;
  //     store.error = payload;
  //   },
  // }
});

console.log(filterSlice);

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
