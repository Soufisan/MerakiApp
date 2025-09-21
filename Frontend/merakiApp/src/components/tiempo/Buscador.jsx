import React, { useState } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';

let APIKEY = 'fea4e10893e2dfaa205a2269eeca82a8';

export const Buscador = ({ setDataTotal }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = async () => {
    try {
      let resultado = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&appid=${APIKEY}`
      );
      setDataTotal(resultado.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label>Introduce una ciudad</label>
      <input type="text" value={city} onChange={handleChange} />
      <Button onClick={onSubmit}>Aceptar</Button>
    </div>
  );
};
