import getDataService from "./getDataService";

const WIKIPEDIA_BASE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

export const fetchWikipedia = async (planetName) => {
    const { getData } = getDataService();

    const data = await getData(`${WIKIPEDIA_BASE_URL}${planetName}`, {}, "Wikipedia API");

    return {
        img: data.thumbnail?.source || null,
        description: data.extract,
        url: data.content_urls.desktop.page
    }
};
