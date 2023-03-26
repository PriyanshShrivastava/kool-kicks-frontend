import React, { useEffect, useState } from 'react';

const FilterCategory = ({ _id, name, handleFilterCategory }) => {
  return (
    <div className=" md:w-1/2 lg:w-full flex justify-start items-center space-x-4">
      <input
        type="checkbox"
        name="checkbox"
        className="w-4 h-4 accent-brand cursor-pointer"
        onChange={(event) => {
          const isChecked = event.target.checked;
          handleFilterCategory(isChecked, _id);
        }}
      />
      <p className="text-xs md:text-sm font-raleway font-medium my-auto">
        {' '}
        {name}
      </p>
    </div>
  );
};

export default FilterCategory;
