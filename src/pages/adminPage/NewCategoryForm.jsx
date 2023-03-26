import React, { useState } from 'react';

const NewCategoryForm = ({ handleSubmit, name, setName, isCreate }) => {
  return (
    <form
      className="flex space-x-2 w-full items-center justify-evenly"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-2/3 p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 font-josefin"
        onChange={(event) => {
          const input = event.target.value;
          setName(input);
        }}
        placeholder="Enter new category"
        value={name}
      />
      <button className="text-xs md:text-md px-2 md:px-5 py-2 md:py-3 bg-teal-300 rounded-md text-gray-700 font-semibold font-josefin hover:scale-105 transition-all duration-150">
        {!isCreate ? 'Create' : 'Update'}
      </button>
    </form>
  );
};

export default NewCategoryForm;
