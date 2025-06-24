import getDataService from "./getDataService";

const SOLARSYSTEM_BASE_URL = "https://api.le-systeme-solaire.net/rest/bodies/";

export const fetchSolarSystem = async (planetName) => {
    const { getData } = getDataService();

    const data = await getData(`${SOLARSYSTEM_BASE_URL}${planetName}`, "Solar System OpenData");
  
    return {
        mass: data.mass.massValue,
        radius: data.equaRadius,
        gravity: data.gravity,
        period: data.sideralRotation
    };
};
