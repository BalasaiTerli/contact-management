import React, { useState, useEffect } from "react";

function ContactForm({
  addContact,
  updateContact,
  editingContact,
  setIsFormOpen,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(""); 

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
      setAddress(editingContact.address);
    }
  }, [editingContact]);

  const handleSave = () => {
    if (!name || !email || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[\s.-]?([0-9]{3})[\s.-]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");

    const newContact = {
      id: editingContact ? editingContact.id : Date.now(),
      name,
      email,
      phone,
      address,
    };
    editingContact ? updateContact(newContact) : addContact(newContact);
    setIsFormOpen(false);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md my-4 max-w-xs mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        {editingContact ? "Edit" : "Add"} Contact
      </h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="space-y-3 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => setIsFormOpen(false)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
