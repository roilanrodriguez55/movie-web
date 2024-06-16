import axios from "axios"
import React, { useEffect } from "react"
import "../styles/MediaCard-styles.css"

function MediaCard({ title, setHistorial, historial, setMovie, movie }) {
  useEffect(() => {
    fetchMovieByName()
  }, [title])

  async function fetchMovieByName() {
    const APIKEY = "e03b7495"
    try {
      const res = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${APIKEY}`)
      const { Title, Year, Director, Actors, imdbID, Poster, Language, Plot } =
        await res.data

      const result = {
        title: Title,
        year: Year,
        director: Director,
        actors: Actors,
        poster: Poster,
        imdbID,
        lang: Language,
        description: Plot,
      }

      if (Title) {
        setMovie(result)
        addHistorial(result)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  function addHistorial(movie) {
    setHistorial([...historial, movie])
  }

  return (
    <div className="media-card">
      <h2>Resultados</h2>
      {movie.title ? (
        <>
          <div className="poster-container">
            <img src={movie.poster} alt="" width={150} />
          </div>
          <p className="media-card__title">{movie.title}</p>
          <p className="media-card__year">{movie.year} </p>
          <p>Director: {movie.director} </p>
          <p>Actors: {movie.actors}</p>
          <p>Language: {movie.lang}</p>
          <p>Description: {movie.description}</p>
        </>
      ) : ""}
    </div>
  )
}

export default MediaCard
