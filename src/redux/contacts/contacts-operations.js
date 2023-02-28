import * as api from 'services/serviceApiContacts';
import * as actions from './contacts-actions';

export const fetchAllBooks = () => {
  const func = async dispatch => {
    try {
      // запит пішов
      dispatch(actions.fetchAllBooksLoading());
      // якщо відповідь успішна - отримуємо дані
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      // якщо відповідь НЕуспішна - отримуємо помилку
      dispatch(actions.fetchAllContactsError(response.data.messange));
    }
  };
  return func;
};
