import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById( heroeId ), [heroeId]);

    if ( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if ( history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = hero;
    
    return (
        <div className="row mt-5">
            <div className="col-md-8 offset-md-2" >
                <div className="card" >
                    <div className="row no-gutters">
                        <div className="col-md-4 align-self-center">
                            <img src={`../assets/heroes/${ heroeId }.jpg`} alt={superhero} className="card-img p-2 animate__animated animate__zoomInDown"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-uppercase">
                                    {superhero}
                                </h1>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Alter ego: </b> { alter_ego }</li>
                                    <li className="list-group-item"><b>Publisher: </b> { publisher }</li>
                                    <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
                                </ul>
                                <h5 className="card-title">
                                    Characters
                                </h5>
                                <p className="card-text">{ characters }</p>
                                <button 
                                    className="btn btn-outline-info btn-block mt-2"
                                    onClick={handleReturn}
                                >
                                    Return
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
