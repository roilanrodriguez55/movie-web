import React, { useState } from 'react'
import { RiMenuUnfold2Line } from "react-icons/ri"

function MenuBtn({setShowHistorial,showHistorial}) {
  
  return (
    <button className='menu' onClick={() => {
      setShowHistorial(!showHistorial)
    }}><RiMenuUnfold2Line className='menu-icon' /></button>
  )
}

export default MenuBtn
