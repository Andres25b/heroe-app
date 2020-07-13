import React from 'react';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = useMemo(() => queryString.parse(location.search),[location.search])
    
    const [values, handleInputChange] = useForm({searchText: q});
    
    const { searchText } = values

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`);
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">
                <div className="col-md-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Find your hero" className="form-control" name="searchText" value={searchText} onChange={handleInputChange} autoComplete="off" />
                        <button type="submit" className="btn btn-outline-primary btn-block mt-2">Search...</button>
                    </form>
                </div>

                <div className="col-md-7">
                    <h4>Results</h4>
                    <hr />

                    {(q === '') && <div className="alert alert-info">
                        Search a hero...
                    </div>}

                    {(q !== '' && heroesFilter.length === 0) && <div className="alert alert-danger">
                        There is not a hero with {q}
                    </div>}

                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
