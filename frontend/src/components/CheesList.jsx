import React, { useEffect, useState } from 'react';
import Axios from '../service/Axios';

const CheeseList = ({ category }) => {
  const [cheeses, setCheeses] = useState([]);

  useEffect(() => {
    Axios.get(`/cheeses/categories/${category}`)
      .then(response => {
        setCheeses(response.data);
      })
      .catch(error => {
        console.error(`Erreur lors de la récupération des fromages de la catégorie ${category}`, error);
      });
  }, [category]);

  return (
    <div>
      <h1 className='text-xl mb-4 font-semibold'>Fromages de la catégorie {category}</h1>
      {cheeses.map((cheese, index) => (
        <div className='border border-gray-300 p-2 my-2 rounded-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
        key={index}>
          <h2 className='hover:scale-110'>
            {cheese.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CheeseList;