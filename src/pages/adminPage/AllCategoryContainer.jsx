import React, { useState } from 'react';

const AllCategoryContainer = ({
  category,
  editCategory,
  setUpdatedName,
  setCategorySelected,
  handleDelete,
}) => {
  const [editClicked, setEditClicked] = useState(false);

  const handleEdit = () => {
    setEditClicked(true);
    editCategory(editClicked);
    setUpdatedName(category?.name);
    setCategorySelected(category);
  };
  return (
    <>
      <div className="flex space-x-4 w-full items-center justify-between px-10 py-4 rounded-md bg-slate-100">
        <p className="text-sm md:text-md font-josefin font-semibold">
          {category?.name}
        </p>
        <div className="text-sm md:text-md font-josefin font-semibold flex space-x-3">
          <button onClick={handleEdit}>
            <i className="fa-regular fa-pen-to-square text-lg text-brand"></i>
          </button>
          <button
            onClick={() => {
              setCategorySelected(category);
              handleDelete(category._id);
            }}
          >
            <i className="fa-solid fa-trash text-lg text-brand"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AllCategoryContainer;
