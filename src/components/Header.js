import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Header({ setIsFormOpen, setSearchQuery }) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-blue-600 text-white rounded-md space-y-2 sm:space-y-0">
      <h1 className="text-lg sm:text-xl font-bold">Contact Management</h1>
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-black outline-none w-full sm:w-auto"
        />
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-green-500 px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
        >
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
        </button>
      </div>
    </header>
  );
}

export default Header;
