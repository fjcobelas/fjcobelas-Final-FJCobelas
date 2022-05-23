
import React from 'react'

const Nosotros = () => {
  return (
    <div>Nosotros</div>
  )
}

export default Nosotros




/* import { useEffect } from "react"


const Nosotros = () => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("Click en componente")
      
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            console.log('Window clickeado')
        })
    }, [])

    return (
        <div onClick={handleClick}>
            <h2>Conoceme</h2>
            <hr/>
        </div>
    )
}

export default Nosotros */