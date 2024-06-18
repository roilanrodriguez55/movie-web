import { useRef } from 'react'
import "../styles/Search-styles.css"

function Search({ setTitle, textSearch, setTextSearch }) {
  const movie = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()
    setTextSearch(movie.current.value)
    setTitle(movie.current.value)
  }

  function handleChange(e) {
    setTextSearch(e.target.value)
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search"
        ref={movie}
        value={textSearch}
        onChange={handleChange}
      />
    </form>
  )
}

export default Search
