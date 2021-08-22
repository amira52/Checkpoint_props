import React from 'react'
import MovieCard from './MovieCard'
const MoviesList = ({moviesData}) => {
  const handleName = (name) => alert(name);
  return (
    <div>
      {moviesData.map((el)=>(
      <MovieCard movie={el} key={el.id} handleName={handleName} />))}
    </div>
  )
}

export default MoviesList
