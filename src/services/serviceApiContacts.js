import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fdea50cd13ced3d7c21a98.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  //   console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  console.log(data);
  return data;
};
