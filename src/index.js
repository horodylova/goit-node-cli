import { program } from "commander";
import { listContacts, getContactById } from "./contacts";

const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.join(__dirname, "db", "contacts.json");

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
      break;

    case "remove":
      break;

  }
}

invokeAction(options);


 


