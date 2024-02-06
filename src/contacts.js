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
  return result;
};

module.exports = {
  listContacts,
  getContactById,
};

//   async function getContactById(contactId) {
//     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
//   }

//   async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   }

//   async function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту (з id).
//   }
