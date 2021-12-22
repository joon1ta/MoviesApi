import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_GENRES = 'GET_GENRES';

export function getMovies() {
    return async function (dispatch) {
        return await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8587e1917aeca487cef549aad8ef5663&language=en-US')
        .then(response => {
            console.log(response.data.results)
            dispatch({
                type: GET_MOVIES,
                payload: response.data.results
            })
        })
    }
}