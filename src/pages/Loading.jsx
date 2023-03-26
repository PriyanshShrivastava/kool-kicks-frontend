import React from 'react';

const Loading = () => {
  return (
    <div className="col-span-1 sm-col-span-2 lg:col-span-3">
      <div className="flex items-center justify-center w-full h-full">
        <div className="h-full w-full bg-transparent">
          <div className="flex justify-center items-center h-full ">
            <img
              className="h-16 w-16"
              src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
              alt="Laoding"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
