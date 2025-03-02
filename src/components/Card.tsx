import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {
  return (
    <div className="w-full max-w-48 mx-auto h-64 my-auto p-6 border border-gray-300 rounded-lg mt-8 cursor-pointer hover:shadow-md">
      <h3 className="text-xl text-center font-semibold text-blue-500 mb-4">{title}</h3>
      <p className="text-gray-600 text-center text-xs mb-4">
        {description}
      </p>
    </div>
  );
};

export default Card;