import React from 'react';

export interface PlanetProps {
    planet: any;
}

const Planet: React.FC<PlanetProps> = ({ planet }) => {
    return (
        <div className="Planet">
            <div className="Card">
                <h3>{planet.name}</h3>
                <p>Population: {planet.population}</p>
                <p>Terrain: {planet.terrain}</p>
            </div>
        </div>
    );
}

export default Planet;
