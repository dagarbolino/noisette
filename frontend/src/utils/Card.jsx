import React from 'react';


const Card = ({ name, price, imageUrl, quantity }) => {
  return (
<div className="max-w-[1500px] mx-auto pb-4 mt-26 flex flex-wrap">
  <div className="flex flex-col items-center justify-center rounded-xl relative shadow-lg">
    <img src={imageUrl} alt={name} 
    className="w-36 h-36 object-cover p-2 transform transition-all duration-500 hover:scale-110" />

    <h2 className="font-bold text-md mb-2">{name}</h2>
    <p className="text-xs flex float-end m-2">{price} € le {quantity}</p>
  </div>
</div>

  );
};

export default Card;