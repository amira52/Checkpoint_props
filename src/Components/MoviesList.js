import React from 'react'
import MovieCard from './MovieCard'
const MoviesList = ({moviesData}) => {
  return (
    <div>
      
      {moviesData.map((el)=>(<MovieCard movie={el} />))}
    </div>
  )
}

export default MoviesList
