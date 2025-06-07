import './PlanetCard.scss';

export const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
        <div className="planet-card__img">
          <img src={planet.img} alt={planet.name} />
        </div>
        <div className="planet-card__name">{ planet.name }</div>
        <div className="planet-card__diameter planet-data">Diameter: </div>
        <div className="planet-card__mass planet-data">Mass: </div>
        <div className="planet-card__gravity planet-data">Gravity: </div>
        <div className="planet-card__period planet-data">Period: </div>
    </div>
  );
};
