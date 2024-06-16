import "../styles/Historial-styles.css"
import { MdOutlineExitToApp } from "react-icons/md"
import axios from 'axios'

function Historial({ historial, showHistorial, setShowHistorial,setMovie }) {
  async function handleOnClickItem(e, film) {
    setMovie(film)
  }
  return (
    showHistorial ?
      <div className='historial'>
        <button className='exit-btn' onClick={() => {
          setShowHistorial(!showHistorial)
        }}><MdOutlineExitToApp /></button>
        <h2>Historial</h2>
        <hr />
        <ul>
          {historial.map((film, i) => (
            <li key={i} className='h-item' onClick={(e) => handleOnClickItem(e, film)}>
              {`${i + 1}. ${film.title} ${film.year}`}
            </li>
          )
          )}
        </ul>
      </div> :
      ""
  )
}

export default Historial
