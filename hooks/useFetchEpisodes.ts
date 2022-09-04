import { useEffect, useState } from 'react';
import { ShowResponse } from '../types';

export const useFetchEpisodes = (query: string) => {
    const [results, setResults] = useState<ShowResponse>(null as unknown as  ShowResponse);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const fetchEpisodes = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`
            );
            const episodes = await response.json();
            setResults(episodes);    
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query !== '') {
            fetchEpisodes();
        }
    }, [query]);

    return { results, loading, error };
}
