import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../service/Axios';

const CategoryDetail = () => {
  
  const [cheese, setCheese] = useState(null);
  const { name } = useParams();

  const addAccents = (str) => {
    const accentsMap = {
      'a': 'à', 'c': 'ç', 'e': 'é', 'i': 'î', 'o': 'ô', 'u': 'ù', 'y': 'ÿ',
      'A': 'À', 'C': 'Ç', 'E': 'É', 'I': 'Î', 'O': 'Ô', 'U': 'Ù', 'Y': 'Ÿ'
    };
    return str.split('-').map(word => word.split('').map(char => accentsMap[char] || char).join('')).join(' ');
  }

  useEffect(() => {
    const cheeseName = addAccents(name);
    Axios.get(`categories/${cheeseName}/`)
      .then(response => {
        setCheese(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du fromage', error);
      });
  }, [name]);

  return (
    <div>
      {cheese ? (
        <div>
          <h1>{cheese.name}</h1>
          <p>Catégorie : {cheese.category}</p>
          <p>Description : {cheese.description}</p>

        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default CategoryDetail;