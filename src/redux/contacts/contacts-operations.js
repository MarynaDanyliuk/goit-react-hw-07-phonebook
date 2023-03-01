import * as api from 'services/serviceApiContacts';
import * as actions from './contacts-actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      // запит пішов
      dispatch(actions.fetchAllContactsLoading());
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

const isDublicate = (contacts, { name }) => {
  const normalizedName = name.toLowerCase();
  const result = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizedName;
  });

  return Boolean(result);
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} is alredy in contacts!`);

        return false;
      }
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.messange));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async (dispatch, getState) => {
    try {
      //   const { contacts } = getState();

      dispatch(actions.fetchDeleteContactLoading());
      const result = await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.messange));
    }
  };
  return func;
};
