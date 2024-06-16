import { useRef } from 'react'
import "../styles/Search-styles.css"

function Search({ setTitle}) {
  const movie = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()
    setTitle(movie.current.value)
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search movie"
        ref={movie}
      />
    </form>
  )
}

export default Search
