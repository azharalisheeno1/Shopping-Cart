import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center h-full items-center mt-28">
      <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
