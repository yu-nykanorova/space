import { Link } from 'react-router-dom';
import { PlanetCard } from '../../components/planetCard/PlanetCard';
import { Banner } from '../../components/banner/Banner';
import solarSystem from '../../assets/img/solar-system2.jpg'
import './Planets.scss';
import { DecorLine } from '../../components/decor/DecorLine';
import mercury from "../../assets/img/planet-mercury-preview.jpg";
import venus from "../../assets/img/planet-venus-preview.jpg";
import earth from "../../assets/img/planet-earth-preview.jpg";
import mars from "../../assets/img/planet-mars-preview.jpg";
import jupiter from "../../assets/img/planet-jupiter-preview.jpg";
import saturn from "../../assets/img/planet-saturn-preview.jpg";
import uranus from "../../assets/img/planet-uranus-preview.jpg";
import neptune from "../../assets/img/planet-neptune-preview.jpg";

const planets = [
    { id: "mercury", name: "Mercury", img: mercury },
    { id: "venus", name: "Venus", img: venus },
    { id: "earth", name: "Earth", img: earth },
    { id: "mars", name: "Mars", img: mars },
    { id: "jupiter", name: "Jupiter", img: jupiter },
    { id: "saturn", name: "Saturn", img: saturn },
    { id: "uranus", name: "Uranus", img: uranus },
    { id: "neptune", name: "Neptune", img: neptune },
]

export const Planets = () => {
  
    return (
        <>
            <Banner className="banner-planets">
                <h2 className="banner-planets__title">Solar System</h2>
            </Banner>
            <div className="planets">
                <div className="planets__solar-system">
                    <div className="planets__solar-system-image">
                        <img src={solarSystem} alt="Solar System" />
                    </div>
                    <div className="planets__solar-system-about">
                        <h3>Our Solar System</h3>
                        <DecorLine className="decor-line-dark" />
                        <p>The Solar System is a planetary system with the Sun at its center. Eight planets, along with dwarf planets, moons, asteroids, comets, and other celestial bodies, orbit around it. The Solar System formed about 4.6 billion years ago from a cloud of gas and dust. It is our cosmic home and serves as a subject of study and inspiration for science and exploration.</p>
                    </div>
                </div>            
                <h2 className="planets__title">Solar System Planets</h2>
                <div className="planets__list">
                    {planets.map((planet) => (
                        <Link key={ planet.id } to={`/planets/${planet.id}`}>
                            <PlanetCard planet={ planet } />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );

};
