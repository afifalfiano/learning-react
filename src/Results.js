import React from 'react';
import Pet from './Pet';



const Results = ({pets}) => {
    return (
        <div className="search">
            {pets.length === 0 ? (<h1>No Pets Found</h1>) : (
                pets.map(petItem => (
                    <Pet 
                        animal = {petItem.type}
                        key= {petItem.id}
                        name={petItem.name}
                        breed={petItem.breeds.primary}
                        media={petItem.photos[0].small}
                        location={`${petItem.contact.address.city}, ${petItem.contact.address.state}`}
                        id={petItem.id}
                    />
                ))
            )}
        </div>
    )
} 

export default Results;