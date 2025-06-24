const getDataService = () => {

    const getData = async (url, apiName = "") => {
        try {
            const result = await fetch(url);
            if(!result.ok) {
                throw new Error(`Failed to fetch data from ${apiName}`);
            }
            const data = await result.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    };
  
    return { getData };
};

export default getDataService;
