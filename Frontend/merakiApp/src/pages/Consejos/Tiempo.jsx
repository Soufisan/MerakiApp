import React from 'react';
import { Boton } from '../../components/boton/Boton';


export const Tiempo = () => {
  const navigate = useNavigate();
  return (
    <>
      <article>
        <h3 className="ms-5">Tips sobre el tiempo</h3>
        <ul>
          <li>
            Usa apps confiables como AccuWeather, Weather.com, Windy, o la del
            país que visitas.
          </li>
          <li>Mira el clima para cada día del viaje, no solo el general.</li>

          <li>
            Presta atención a alertas de clima extremo (tifones, tormentas,
            calor extremo, etc.).
          </li>
        </ul>
        <p>
          Siempre puedes utilizar nuestra aplicación para ver el tiempo días
          antes del viaje y poder organizarte{' '}
        </p>
        <Boton aspecto='redondo' onClick={()=>navigate('/tiempoGeneral')} nombre='Ver tiempo'/>
        
      </article>
    </>
  );
};
