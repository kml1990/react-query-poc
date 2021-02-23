import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

export enum Page {
    PLANETS = 'planets',
    PEOPLE = 'people',
}

const queryClient = new QueryClient()

const App: React.FC = () => {
    const [page, setPage] = useState<Page>(Page.PLANETS);

    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <h1>Star Wars Info</h1>
                <Navbar setPage={setPage} />
                <div className="App__content">
                    {page === Page.PLANETS ? <Planets /> : <People />}
                </div>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    );
}

export default App;
