import axios from "axios"
import React, { useEffect, useState } from "react"
import "../styles/MediaCard-styles.css"

function MediaCard({ title }) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovieByName = async () => {
      const APIKEY = "e03b7495"
      let URL = `http://www.omdbapi.com/?t=${title}&apikey=${APIKEY}`
      const res = await axios.get(URL)
      const { Title, Year, Director, Actors, Poster, imdbID, Language, Plot } =
        await res.data

      setMovie({
        title: Title,
        year: Year,
        director: Director,
        actors: Actors,
        poster: Poster,
        id: imdbID,
        lang: Language,
        description: Plot,
      })
    }
    fetchMovieByName()
  }, [title])

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
