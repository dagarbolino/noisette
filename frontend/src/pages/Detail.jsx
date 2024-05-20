import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Axios from '../service/Axios';

import CardDetail from '../utils/CardDetail'; 

const Detail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`/${id}`)
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
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-full mt-24 flex flex-col justify-between'>
      {data && (
        <div className="flex flex-col">
          <h2 className='text-3xl font-bold underline mb-10'>{id}</h2>
          <div className='max-w-sm w-full lg:max-w-full lg:flex'>
            <CardDetail
              id={data.id}
              price={data.price}
              imageUrl={data.imageUrl}
              quantity={data.quantity}
              description={data.description}
              milk_type={data.milk_type}
              origin={data.origin}
              department={data.department}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;