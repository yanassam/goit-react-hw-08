export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = (state) => {

  const contacts = selectContacts(state);
  const filter = state.filters.name;
  
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
