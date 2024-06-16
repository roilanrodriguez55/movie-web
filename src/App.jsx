import { useState } from "react"
import MediaCard from "./components/MediaCard"
import Search from "./components/Search"
import "./styles/App-styles.css"
import MenuBtn from "./components/MenuBtn"
import Historial from "./components/Historial"
function App() {
  const [title, setTitle] = useState("")
  const [historial, setHistorial] = useState([])
  const [showHistorial, setShowHistorial] = useState(false)
  const [movie, setMovie] = useState({})
  return (
    <main>
      <h1>Search movies</h1>
      <MenuBtn historial={historial} showHistorial={showHistorial} setShowHistorial={setShowHistorial} />
      <Search setTitle={setTitle} />
      <MediaCard setMovie={setMovie} movie={movie} title={title} setHistorial={setHistorial} historial={historial} />
      <Historial setMovie={setMovie} movie={movie} historial={historial} showHistorial={showHistorial} setShowHistorial={setShowHistorial} />
    </main>
  )
}

export default App
