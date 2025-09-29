const getDataService = () => {

    const getData = async (url, options = {}, apiName = "") => {
        try {
            const result = await fetch(url, options);
            if(!result.ok) {
                throw new Error(`Failed to fetch data from ${apiName}, status: ${result.status}`);
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
