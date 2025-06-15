import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { planets } from '../../database/planets';
import { Banner } from '../../components/banner/Banner';
import { Spinner } from '../../components/decor/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { fetchWikipedia } from '../../services/wikipedia';
import './PlanetDetails.scss';
import '../../components/banner/Banner.scss';

export const PlanetDetails = () => {
  const { id } = useParams();
  const planet = planets.find(item => item.id === id);

  if (!planet) {
    return <div className="planet-details">Planet not found</div>;
  }

  const { data, loading, error } = useFetch(() => fetchWikipedia(planet.wikiName));
  
  return (
    <>
      <Banner className="banner-planets">
        <h2 className="banner-planets__title">Solar System</h2>
      </Banner>
      {loading && <Spinner />}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && data && (
          <>
            <div className="planet-details">
              <div className="planet-details__img">
                <img src={ data.img } alt={ planet.name } />
              </div>
              <div className="planet-details__desc">
                <h2>{ planet.name }</h2>
                <p>{ data.description }</p>
                <Link className="planet-details__desc-btn btn" to={data.url} target="_blank">Read more...</Link>
              </div>
            </div>
          </>
      )}
    </>
  );

};
