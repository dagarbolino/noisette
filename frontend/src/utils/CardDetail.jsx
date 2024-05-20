import React from 'react';




const CardDetail = ({ name, price, imageUrl, quantity, description, milk_type, origin, department }) => {
  return (
    <>
      <img src={imageUrl} alt={name} className="w-80 h-full object-cover p-2 rounded-xl" />
      <div className="w-full px-6 py-4 mb-8 flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl underline mb-10">{name}</h2>
        </div>
        <h2 className="text-gray-900 font-bold text-2xl mb-2">Description</h2>
        <p className='text-gray-700 text-lg'>{description}</p>
        <p className='text-lg mt-2'>Fromage au lait {milk_type}</p>
        <p className='text-lg'>Origine : {origin} {department}</p>

        <div className="flex flex-row items-end justify-end">
          <p className="text-md flex float-end m-2">{price} € le {quantity}</p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
