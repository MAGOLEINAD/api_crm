import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
    <h1 className='text-4xl font-black text-blue-900'>NuevoCliente</h1>
    <p className='font-semibold mt-3'>Llena los siguientes campos para registrar un cliente</p>
    <Formulario/>
    </>
  )
}

export default NuevoCliente