import React, { useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    setIsFormOpen(false);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
    setIsFormOpen(false);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Header setIsFormOpen={setIsFormOpen} setSearchQuery={setSearchQuery} />
      {isFormOpen && (
        <ContactForm
          addContact={addContact}
          updateContact={updateContact}
          editingContact={editingContact}
          setIsFormOpen={setIsFormOpen}
        />
      )}
      <ContactList
        contacts={filteredContacts}
        setEditingContact={setEditingContact}
        deleteContact={deleteContact}
        setIsFormOpen={setIsFormOpen}
      />
    </div>
  );
}

export default App;
