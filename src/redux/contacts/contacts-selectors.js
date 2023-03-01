// export const getAllContacts =( store )=> store.contacts;

export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const filterNormalize = filter.toLowerCase();

  const filterList = contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(filterNormalize);
  });
  return filterList;
};

// console.log(getFilteredContacts());
