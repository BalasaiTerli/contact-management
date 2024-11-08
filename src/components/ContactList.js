import React from "react";
import ContactCard from "./ContactCard";

function ContactList({
  contacts,
  setEditingContact,
  deleteContact,
  setIsFormOpen,
}) {
  return (
    <div className="my-4">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          setEditingContact={setEditingContact}
          deleteContact={deleteContact}
          setIsFormOpen={setIsFormOpen}
        />
      ))}
    </div>
  );
}

export default ContactList;
