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
    <>
      <main style={
        showHistorial ?
          {
            filter: "blur(10px)",
            transition: "ease 0.5s"
          } :
          {}
      }>
        <h1>Search movies</h1>
        <MenuBtn historial={historial} showHistorial={showHistorial} setShowHistorial={setShowHistorial} />
        <Search setTitle={setTitle} />
        <MediaCard setMovie={setMovie} movie={movie} title={title} setHistorial={setHistorial} historial={historial} />
        {
          showHistorial ?
            <div className="blank" onClick={(e) => setShowHistorial(false)}></div> :
            ""
        }
      </main>
      <Historial setMovie={setMovie} movie={movie} historial={historial} showHistorial={showHistorial} setShowHistorial={setShowHistorial} />
    </>
  )
}

export default App
