const { program } = require("commander");
const { listContacts, getContactById, addContact, removeContact } = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

      default:
        console.warn("Unknown action type");
  }
}

invokeAction(options);



 


