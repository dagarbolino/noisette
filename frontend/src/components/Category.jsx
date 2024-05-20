import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from '../service/Axios';



function removeAccents(str) {
  const accentsMap = {
    'à': 'a', 'â': 'a', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'î': 'i', 'ï': 'i', 'ô': 'o', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ÿ': 'y'
  };
  return str.split('').map(char => accentsMap[char] || char).join('');
}

const Catero = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('/')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        if (!error.response) {
          setError('Network Error: Please check your internet connection or try again later.');
        } else {
          setError(error.message);
        }
      });

    const interceptor = Axios.interceptors.response.use(
      response => response,
      error => {
        if (!error.response) {
          setError('Network Error: Please check your internet connection or try again later.');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      Axios.interceptors.response.eject(interceptor);
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const uniqueCategories = data ? [...new Set(data.map(item => item.category))] : [];

  return (
    <div>
      <h1 className='text-2xl my-9 font-semibold'>Liste des catégories</h1>
      <ul className='flex flex-col justify-start items-center w-56'>
        {uniqueCategories.map((category, index) => (
          <div key={index}>
            <NavLink
              to={`/${removeAccents(category.name.toLowerCase()).replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
              className="w-full h-10 text-lg font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-lg my-2">
              {category.name}
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Catero;