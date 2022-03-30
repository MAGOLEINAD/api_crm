import {useEffect,useState, React} from 'react'
import Cliente from '../components/Cliente'


const Inicio = () => {
  const [clientes,setClientes] = useState([])

const handleEliminar = async (id) => {
  const confirmar = confirm('Deseas eliminar el cliente?')
  console.log('Eliminando',id);
  if (confirmar) {
    try {
      
      const url = `http://localhost:4000/clientes/${id}`
      const respuesta = await fetch(url, {
        method: 'DELETE'
      })
      const resultado = await respuesta.json()
      const arrayClientes = clientes.filter(cliente => cliente.id !==id )
      setClientes(arrayClientes)


    } catch (error) {
      console.log(error);
    }
  }
}
  useEffect (() => {
    const obtenerClientesApi = async () => {
    try {
      
      const url = 'http://localhost:4000/clientes'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setClientes (resultado)


    } catch (error) {
      console.log(error);
    }
     
  }
  obtenerClientesApi()
  },[])

  
  return (
    <>
    <h1 className='text-4xl font-black text-blue-900'>Clientes</h1>
    <p className='font-semibold mt-3'>Administra tus clientes</p>
    <table className='w-full mt-5 table-auto shadow bg-white'>
    <thead className='bg-blue-800 text-white'>
      <tr>
        <th className='p-2'>Nombre</th>
        <th className='p-2'>Contacto</th>
        <th className='p-2'>Empresa</th>
        <th className='p-2'>Acciones</th>
      </tr>
    </thead>
      {/* {clientes.map(cliente => <div>{cliente.nombre}</div>
      )} */}
    <tbody>
      {clientes.map(cliente => 
      <Cliente
          key={cliente.id}
          cliente={cliente}
          handleEliminar={handleEliminar}
      />)}
    </tbody>
    </table>
    </>
  )
}

export default Inicio