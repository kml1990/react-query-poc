import React from 'react';

export interface PersonProps {
    person: any;
}

const Person: React.FC<PersonProps> = ({ person }) => {
    return (
        <div className="Person">
            <div className="Card">
                <h3>{person.name}</h3>
                <p>Gender: {person.gender}</p>
                <p>Birth Year: {person.birth_year}</p>
            </div>
        </div>
    );
}

export default Person;
