import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fdea50cd13ced3d7c21a98.mockapi.io',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};
