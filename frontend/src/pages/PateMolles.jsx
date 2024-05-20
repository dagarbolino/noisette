import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from '../service/Axios';

const PateMolle = () => {
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

  return (
    <div>
      {/**{data ? JSON.stringify(data) : 'Loading...'} */}

      <h1 className='text-2xl my-9 font-semibold'>Liste des fromages</h1>
      <ul className='flex flex-col justify-start items-center w-56'>
        {data && data.map((item, index) => (
          <div>
            <NavLink
              to={`/${item.name}`}
              className="w-full h-10 text-lg font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-lg my-2"
              key={index}>
              {item.name}
            </NavLink>
          </div>
        ))}
      </ul>

    </div>
  );
};

export default PateMolle;
