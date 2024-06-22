import { AnimatePresence, motion } from 'react-magic-motion'
import "../styles/Historial-styles.css"
import { MdOutlineExitToApp } from "react-icons/md"

function Historial({ historial, showHistorial, setShowHistorial, setMovie, setTextSearch }) {
  async function handleOnClickItem(e, film) {
    setMovie(film)
    setTextSearch(film.title)
    setShowHistorial(false)
  }
  return (
    <AnimatePresence>
      {showHistorial && (
        <motion.div
          className='historial'
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Historial
