import { useState } from "react"
import MediaCard from "./components/MediaCard"
import Search from "./components/Search"
import "./styles/App-styles.css"

function App() {
  const [title, setTitle] = useState("")
  return (
    <main>
      <h1>Search movies</h1>
      <Search setTitle={setTitle} />
      <MediaCard title={title} />
      
    </main>
  )
}

export default App
