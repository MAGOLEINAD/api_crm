import {useState, useEffect, React} from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {
const [cliente, setCliente]= useState([])
const [cargando, setCargando]= useState(true)
const {id} = useParams()


useEffect (() => {
    const obtenerClienteApi = async () => {
    try {
        
            const url = `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
            setCliente(resultado)
        }
          catch (error) {
        console.log(error);
    }
    } 
setCargando(false)
    obtenerClienteApi()
},[])



  return (
    Object.keys(cliente).length === 0 ? <p>No hay resultados</p> :
       
    <div>
          <p><span className='text-4xl font-black text-blue-900 mb-10 block '>Ver Cliente: {cliente.nombre}</span></p>
          <p className='font-bold text-lg text-blue-700 mb-8'>Informacion del Cliente:</p>
       {cliente.nombre &&  <p className='mb-3'><span className='text-2xl font-bold text-gray-700'>Nombre:</span> {cliente.nombre}</p>}
       {cliente.empresa && <p className='mb-3'><span className='text-2xl font-bold text-gray-700 mb-10 '>Empresa:</span> {cliente.empresa}</p>}
       {cliente.telefono &&  <p className='mb-3'><span className='text-2xl font-bold text-gray-700 mb-10 '>Telefono:</span> {cliente.telefono}</p>}
       {cliente.notas &&  <p className='mb-3'><span className='text-2xl font-bold text-gray-700 mb-10 '>Notas:</span> {cliente.notas}</p>}
      
        </div>
       
  )
  
}

export default VerCliente