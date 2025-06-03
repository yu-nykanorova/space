import './PlanetCard.scss';

export const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
        <div className="planet-card__img">
          <img src={planet.img} alt={planet.name} />
        </div>
        <div className="planet-card__name">{ planet.name }</div>
        <div className="planet-card__diameter">planet diameter</div>
        <div className="planet-card__mass">planet mass</div>
        <div className="planet-card__gravity">planet gravity</div>
        <div className="planet-card__period">planet period</div>
    </div>
  );
};
