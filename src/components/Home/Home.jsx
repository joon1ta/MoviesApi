import React from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getMovies} from '../../Redux/Actions/index'
import Carousel from '../Carousel/Carousel'
import Movies from '../Movies/Movies'
import s from './Home.module.css'


const Home = () => {
const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getMovies())
    }, [dispatch])


    return (
        <div className={s.container}>
            <div className={s.containerCarousel}>
                  <Carousel />
            </div>
            <div>
                <Movies />
            </div>
        </div>
    )
}

export default Home
