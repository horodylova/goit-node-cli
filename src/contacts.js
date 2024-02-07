const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
   
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result || null;
};

const addContact = async(data) => {
  const contacts = await listContacts();
  const newContact = { id: crypto.randomUUID(), ...data};
  contacts.push(newContact);
  await fs.writeFile(contactsPath.JSON.stringify(contacts, null, 2), 'utf8');
  return newContact;

}
module.exports = {
  listContacts,
  getContactById,
  addContact,
};

 

//   async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   }

//   async function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту (з id).
//   }
