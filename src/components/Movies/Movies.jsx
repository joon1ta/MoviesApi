import React from 'react'
import {useSelector} from 'react-redux';
const Movies = () => {


    const movies = useSelector(state => state.movies)
    console.log(movies)

    return (
        <div>
            {movies.map(m => {
                return (
                    <div key={m.id}>
                    <h1>{m.original_title}</h1>
                    <img src={`http://image.tmdb.org/t/p/w185${m.poster_path}`} alt="moviesImg" />
                    </div>
                )
            })}
        </div>
    )
}

export default Movies
