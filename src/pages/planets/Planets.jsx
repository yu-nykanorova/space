import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PlanetCard } from '../../components/planetCard/PlanetCard';
import { Banner } from '../../components/banner/Banner';
import { DecorLine } from '../../components/decor/DecorLine';
import solarSystem from '../../assets/img/solar-system2.jpg';
import { planets } from '../../database/planets';
import './Planets.scss';
import '../../components/banner/Banner.scss';

export const Planets = () => {
  
    return (
        <>
            <Banner className="banner-planets">
                <h2 className="banner-planets__title">Solar System</h2>
            </Banner>
            <div className="solar-system">
                <section className="solar-system__about">
                    <div className="solar-system__about-image">
                        <img src={solarSystem} alt="Solar System" />
                    </div>
                    <div className="solar-system__about-info">
                        <h3>Our Solar System</h3>
                        <DecorLine className="decor-line-dark" />
                        <p>The Solar System is a planetary system with the Sun at its center. Eight planets, along with dwarf planets, moons, asteroids, comets, and other celestial bodies, orbit around it. The Solar System formed about 4.6 billion years ago from a cloud of gas and dust. It is our cosmic home and serves as a subject of study and inspiration for science and exploration.</p>
                    </div>
                </section>            
                <section className="solar-system__planets">
                    <h2 className="solar-system__planets-title">Solar System Planets</h2>
                    <div className="solar-system__planets-list">
                        {planets.map((planet, index) => (
                            <motion.div
                                key={planet.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}                            >
                                <Link to={`/planets/${planet.id}`}>
                                    <PlanetCard planet={ planet } />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );

};
