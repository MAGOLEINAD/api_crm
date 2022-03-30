import {useState, useEffect, React} from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'


const EditarCliente = () => {
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
    <>
    <h1 className='text-4xl font-black text-blue-900'>Editar Cliente</h1>
    <p className='font-semibold mt-3'>Edite los campos para modificar a un cliente</p>
    {cliente?.nombre && ( <Formulario 
    cliente={cliente}/>)}
   
    </>
  )
}

export default EditarCliente