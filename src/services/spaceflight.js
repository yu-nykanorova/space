import getDataService from "./getDataService";

const SPACEFLIGHT_BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles";

export const fetchSpaceflightNews = async (count = 3) => {
    const { getData } = getDataService();

    const data = await getData(`${SPACEFLIGHT_BASE_URL}?limit=100`, {}, "Spaceflight news");

    const mixedNews = data.results.sort(() => 0.5 - Math.random());
    const selectedNews = mixedNews.slice(0, count);

    return selectedNews.map(article => ({
        id: article.id,
        img: article.image_url,
        title: article.title,
        summary: article.summary,
        url: article.url
    }));
};