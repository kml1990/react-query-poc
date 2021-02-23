import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Page } from '../App';
import Planet from './Planet';

const fetchPlanets = async (page: number) => {
    const response = await fetch(`https://swapi.dev/api/planets?page=${page}`);
    return response.json();
}

const usePlanets = (page: number) => {
    return useQuery([Page.PLANETS, page], () => fetchPlanets(page), {
        staleTime: 0,
        cacheTime: 10000,
        keepPreviousData: true,
        onSuccess: () => console.log('success')
    });
}

const Planets: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const { data, status } = usePlanets(page)

    const previousPage = () => {
        setPage(old => Math.max(old - 1, 1));
    }

    const nextPage = () => {
        setPage(old => (!data || !data.next ? old : old + 1));
    }

    return (
        <div className="Planets">
            <h2>Planets</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <>
                    <button onClick={previousPage} disabled={page === 1}>Previous</button>
                    <span>Page {page}</span>
                    <button onClick={nextPage} disabled={!data || !data.next}>Next</button>
                    <div>{data.results.map((planet: any) => <Planet key={planet.name} planet={planet} />)}</div>
                </>
            )}
        </div>
    );
}

export default Planets;
