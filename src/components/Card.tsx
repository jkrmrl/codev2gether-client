import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="w-full max-w-48 mx-auto p-6 rounded-lg mt-8 cursor-pointer hover:shadow-md">
      <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Project Title</h3>
      <p className="text-gray-600 text-center mb-4">
        Description
      </p>
    </div>
  );
};

export default Card;