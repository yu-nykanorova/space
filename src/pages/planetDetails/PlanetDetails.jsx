import { useParams } from 'react-router-dom';
import { planets } from '../../database/planets';
import { Banner } from '../../components/banner/Banner';
import './PlanetDetails.scss';
import '../../components/banner/Banner.scss';

export const PlanetDetails = () => {
  const { id } = useParams();
  const planet = planets.find(item => item.id === id);

  if (!planet) {
    return <div className="planet-details">Planet not found</div>;
  }
  
  return (
    <>
      <Banner className="banner-planets">
        <h2 className="banner-planets__title">Solar System</h2>
      </Banner>
      <div className="planet-details">
        <div className="planet-details__img">
          <img src={ planet.img } alt={ planet.name } />
        </div>
        <div className="planet-details__desc">
          <h2>{ planet.name }</h2>
          <p>Info about { id } will be loaded here</p>
        </div>
      </div>
    </>
  );

};
