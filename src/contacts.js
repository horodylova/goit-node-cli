const fs = require('fs/promises');
const path = require('path');
const name = process.argv[2];
const email = process.argv[3];
const phone = process.argv[4];

const newContact = { id: crypto.randomUUID(), name, email, phone };
console.log(newContact);

const contactsPath = path.join(__dirname, 'db', 'contacts.json');  

const listContacts = async () => { 
    try {
        const data = await fs.readFile(contactsPath, 'utf8'); 
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
};


module.exports = {
    listContacts,
};



// async function listContacts() {
//     // ...твій код. Повертає масив контактів.
//   }
  
//   async function getContactById(contactId) {
//     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
//   }
  
//   async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   }
  
//   async function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту (з id).
//   }