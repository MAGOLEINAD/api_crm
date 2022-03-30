import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center font-semibold p-2 uppercase'>{children}</div>
  )
}

export default Alerta