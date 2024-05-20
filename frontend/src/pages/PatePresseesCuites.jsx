import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../service/Axios';
import Card from '../utils/Card';



const PatePresseesCuites = () => {
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
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl my-9 font-semibold text-ellipsis'>Liste des pâtes pressees cuites</h1>
      <ul className='flex flex-row gap-4 justify-center items-center w-full'>
        {data && data.map((cheese, index) => (

          <div key={index}>

            <Link key={index} to={`/detail/${index}`}>
              <Card
                name={cheese.name}
                price={cheese.price}
                imageUrl={cheese.imageUrl}
                quantity={cheese.quantity}
              />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PatePresseesCuites;
