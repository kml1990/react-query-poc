import React from 'react';
import { useQuery } from 'react-query';
import { Page } from '../App';
import Person from './Person';

const fetchPeople = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    return response.json();
}

const People: React.FC = () => {
    const { data, status } = useQuery(Page.PEOPLE, fetchPeople);

    return (
        <div className="People">
            <h2>People</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <div>{data.results.map((person: any) => <Person key={person.name} person={person} />)}</div>
            )}
        </div>
    );
}

export default People;
