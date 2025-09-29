import getDataService from "./getDataService";

export const fetchSolarSystem = async (planetName) => {
    const { getData } = getDataService();

    
    const options = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const data = await getData(`/api/planets/${planetName}`, options, "Solar System OpenData");
    console.log(data);
  
    return {
        mass: data.mass.massValue,
        radius: data.equaRadius,
        gravity: data.gravity,
        period: data.sideralRotation
    };
};
