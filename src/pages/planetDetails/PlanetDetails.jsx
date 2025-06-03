import { useParams } from 'react-router-dom';

import './PlanetDetails.scss';

export const PlanetDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="planet-details">
        <div className="planet-details__img">IMG</div>
        <div className="planet-details__desc">
            <h2>Planet Info: {id}</h2>
            <p>Info about {id} will be loaded here</p>
        </div>
    </div>
  );

};
