import React from 'react'
import { useNavigate } from 'react-router-dom'


const Cliente = ({cliente,handleEliminar}) => {
const navigate = useNavigate()
const {nombre,empresa,email,telefono,notas,id} = cliente

  return (
      <tr className='border-b hover:bg-gray-50 '>
    <td className='text-center p-3'>{nombre}</td>
    <td className='justify-center  p-3'>
        <p><span className='font-bold'>Email:</span>{email}</p>
        <p><span className='font-bold'>Tel:</span>{telefono}</p>
    </td>
    <td className='text-center p-3'>{empresa}</td>
    <td className='text-center p-3'>
        <button onClick={()=>navigate(`/clientes/${id}`)} className='bg-yellow-600 text-white uppercase px-3 py-1  text-xs hover:bg-yellow-500 font-semibold rounded-sm block w-full'>Ver</button>
        <button onClick={()=>navigate(`/clientes/editar/${id}`)} className='bg-blue-800 text-white uppercase px-3 py-1  text-xs hover:bg-blue-700 font-semibold rounded-sm my-1 block w-full'>Editar</button>
        <button onClick={() =>handleEliminar(id)} className='bg-red-800 text-white uppercase  px-3 py-1 hover:bg-red-700 text-xs font-semibold block rounded-sm w-full'>Eliminar</button>
        </td>

    </tr>
  )
}

export default Cliente

