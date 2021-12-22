import React from 'react'
import {useSelector} from 'react-redux';
const Movies = () => {


    const movies = useSelector(state => state.movies)
    console.log(movies)

    return (
        <div>
            {movies.map(m => {
                return (
                    <h1 key={m.id}>{m.original_title}</h1>
                )
            })}
        </div>
    )
}

export default Movies
