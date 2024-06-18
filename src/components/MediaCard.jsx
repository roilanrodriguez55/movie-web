import axios from "axios"
import React, { useEffect, useState } from "react"
import "../styles/MediaCard-styles.css"
import { AnimatePresence, motion } from "react-magic-motion"
import Loader from 'react-loaders'
import "../styles/Loader.scss"

function MediaCard({ title, setHistorial, historial, setMovie, movie }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchMovieByName()
  }, [title])

  async function fetchMovieByName() {
    setIsLoading(true)
    const APIKEY = "e03b7495"
    try {
      const res = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${APIKEY}`)
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
    setIsLoading(false)
  }

  function addHistorial(movie) {
    setHistorial([...historial, movie])
  }

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader type="ball-pulse" />
      ) : (
        movie.title && (
          <motion.div
            className="media-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Resultados</h2>
            <div className="poster-container">
              <img src={movie.poster} alt="" width={150} />
            </div>
            <h3 className="media-card__title">{movie.title}</h3>
            <h3 className="media-card__year">{movie.year} </h3>
            <div className="details-container">
              <p>Director: {movie.director} </p>
              <p>Actors: {movie.actors}</p>
              <p>Language: {movie.lang}</p>
              <p>Description: {movie.description}</p>
            </div>
          </motion.div>
        )
      )}
    </AnimatePresence>
  )
}

export default MediaCard
