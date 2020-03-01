import React from 'react'

import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import {useMovieFetch} from './hooks/useMovieFetch'
 
const Movie = ( {movieId}) => {

const [movie, loading, error] = useMovieFetch(movieId)
console.log(movie)
    return (
        <>
        <Navigation/>
        <MovieInfo/>
        <MovieInfoBar/>
        <Grid>
            <Actor/>
        </Grid>
        <Spinner/>
    </>
    )
}

export default Movie