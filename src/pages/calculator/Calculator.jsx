import { useState, useEffect } from 'react';
import { Banner } from '../../components/banner/Banner';
import { DecorLine } from '../../components/decor/DecorLine';
import { planets } from '../../database/planets';
import './Calculator.scss';
import '../../components/banner/Banner.scss';

export const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("Earth");
  const [result, setResult] = useState(null);

  useEffect (() => {
    const earthGravity = 9.81;
    const planet = planets.find(item => item.name === selectedPlanet);
    if (planet && weight) {
      const calculated = (weight / earthGravity) * planet.gravity;
      setResult(calculated.toFixed(2));
    } else {
      setResult(null);
    }
  }, [weight, selectedPlanet]);

  return (
    <>
      <Banner className="banner-planets">
        <h2 className="banner-planets__title">Solar System</h2>
      </Banner>
      <div className="calculator">
        <div className="calculator__about">
          <h2 className="calculator__about-title">Discover Your Weight on Other Planets</h2>
          <p className="calculator__about-desc">Have you ever wondered how much you would weigh on Mars, Jupiter, or Neptune? Because each planet in our solar system has a different gravitational pull, your weight would vary depending on where you are. This interactive calculator allows you to enter your Earth weight and instantly see what it would be on any other planet in the solar system.
          </p>
        </div>
        <div className="calculator__content">
          <p>Enter your weight on Earth and choose a planet to see how much you'd weigh there!</p>
          <input
            type="number"
            className="calculator__content-input"
            placeholder="Your weight (kg)"
            value={ weight }
            onChange={(e) => setWeight(e.target.value)}
          />
          <select className="calculator__content-select" value={ selectedPlanet } onChange={(e) => setSelectedPlanet(e.target.value)}>
            {planets.map((planet) => (
              <option key={ planet.name } value={ planet.name }>
                { planet.name }
              </option>
            ))}
          </select>
          {result && (
            <div className="calculator__content-result">
              Your weight on <span>{ selectedPlanet }</span> would be <span>{ result } kg</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
};
