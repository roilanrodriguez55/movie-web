import { useEffect, useRef, useState } from 'react'
import "../styles/Search-styles.css"

function Search({ setTitle}) {
  return (
    <form>
      <input
        className="search"
        type="text"
        placeholder="Search movie"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
    </form>
  )
}

export default Search
