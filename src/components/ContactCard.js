import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

function ContactCard({
  contact,
  setEditingContact,
  deleteContact,
  setIsFormOpen,
}) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleViewClick = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-4 bg-blue-100 shadow-md rounded-md my-3">
      <div className="flex-1 mb-4 md:mb-0 text-gray-800">
        <h3 className="text-lg font-semibold">{contact.name}</h3>
        <p className="text-sm">{contact.phone}</p>

        {isDetailsVisible && (
          <>
            <p className="text-sm">{contact.email}</p>
            <p className="text-sm">{contact.address}</p>
          </>
        )}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={handleViewClick}
          className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faEye} className="mr-1" />
          {isDetailsVisible ? "Hide" : "View"}
        </button>
        <button
          onClick={() => {
            setEditingContact(contact);
            setIsFormOpen(true);
          }}
          className="bg-yellow-400 text-white px-3 py-1 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-1" />
          Edit
        </button>
        <button
          onClick={() => deleteContact(contact.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
