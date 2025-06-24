import getDataService from "./getDataService";

const NASA_API_KEY = "REMOVED";
const NASA_URL = `https://api.nasa.gov/planetary/apod`;

export const fetchNasaPhoto = async (date) => {
    const { getData } = getDataService();

    const url = date
        ? `${NASA_URL}?api_key=${NASA_API_KEY}&date=${date}`
        : `${NASA_URL}?api_key=${NASA_API_KEY}`;

    const data = await getData(url, "NASA Photo of the Day");
    
    return {
        img: data.url,
        title: data.title,
        explanation: data.explanation,
        date: data.date
    };
};