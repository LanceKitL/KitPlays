import { useState, useEffect } from 'react';

type Game = {
    id: number;
    title: string;
    short_description: string;
    release_date: string;
    thumbnail: string;
};

type ApiResponse = Game[];

function useFetch(url: string): [Game[], boolean] {
    const [data, setData] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                const games: ApiResponse = await res.json();
                games.sort(() => Math.random() - 0.5);
                setData(games);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [data, isLoading];
}

export default useFetch;