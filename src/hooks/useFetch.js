import { useState, useEffect } from "react";
import getDataService from "../services/getDataService";

export const useFetch = (fetcher, apiName = "") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { getData } = getDataService();

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result =
                typeof fetcher === 'function'
                    ? await fetcher()
                    : await getData(fetcher, apiName);
            
            setData(result);
        } catch (error) {
            setError(error.message || "Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return { data, loading, error, reload: loadData };
};