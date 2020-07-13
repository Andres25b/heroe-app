import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
}) => {
    return (
        <div className="card ms-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets//heroes/${ id }.jpg`} alt={superhero} className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-0 text-uppercase"> {superhero} </h5>
                        <p className="card-text mb-0">{alter_ego}</p>
                        
                        <p className="card-text m-0">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link className="enlace" to={`./heroe/${id}`}> 
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
