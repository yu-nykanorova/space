import { useFetch } from '../../hooks/useFetch';
import { fetchSolarSystem } from '../../services/solarSystem';
import { Spinner } from '../decor/Spinner';
import './PlanetCard.scss';

export const PlanetCard = ({ planet }) => {
  const { data: planetData, loading, error } = useFetch(() => fetchSolarSystem(planet.id));

  const planetDiameter = planetData?.radius ? planetData.radius * 2 : "N/A";

  return (
    <div className="planet-card">
        <div className="planet-card__img">
          <img src={planet.img} alt={planet.name} />
        </div>
        {loading && <Spinner />}
        {error && <p className="error">Error: {error}</p>}
        {!loading && !error && planetData && (
          <>
            <div className="planet-card__name">{ planet.name }</div>
            <div className="planet-card__diameter planet-data"><span>Diameter:</span> { planetDiameter.toFixed(2) } km</div>
            <div className="planet-card__mass planet-data"><span>Mass:</span> { planetData.mass.toFixed(2) }*10<sup>24</sup> kg</div>
            <div className="planet-card__gravity planet-data"><span>Gravity:</span> { planetData.gravity.toFixed(2) } m/s<sup>2</sup></div>
            <div className="planet-card__period planet-data"><span>Rotation period:</span> { planetData.period.toFixed(2) } h</div>          
          </>
        )}
    </div>
  );
};
