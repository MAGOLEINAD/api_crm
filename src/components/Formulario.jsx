import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import Alerta from './Alerta'



const Formulario = ({cliente}) => {
    const navigate = useNavigate()

    const nuevoClienteSchema = yup.object().shape({
        nombre: yup.string()
        .required('El nombre del cliente es Obligatorio')
        .min(3,'El nombre del cliente es muy corto')
        .max(20,'El nombre del cliente es muy largo'),
        empresa: yup.string()
        .required('El nombre de la empresa es Obligatorio'),
        email:yup.string()
        .required('El Email es Obligatorio')
        .email('El Email es invalido'),
        telefono: yup.number()
        .typeError('El numero no es valido')
        .integer('El numero no es entero')
        .positive('No existen telefonos negativos')
      });

    const handleSubmit = async (valores,{resetForm}) => {

        try {
            let respuesta
            if (cliente.id) { 
                //Editando Registro
                const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`
                 respuesta = await fetch(url, {
                    method:'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                console.log('editando...')
                //Nuevo Registro
            } else {
                
            const url = import.meta.env.VITE_API_URL
             respuesta = await fetch(url, {
                method:'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type':'application/json'
                }
            
            })}
         const resultado = await respuesta.json()
         resetForm()
         navigate('/clientes')
         console.log(resultado);
            
        } catch (error) {
            console.log(error);
            
        }
    }
        // console.log(valores);

        
    return (
            <>
            <Formik
            initialValues={{
                // opcion larga cliente.nombre? cliente.nombre : ''
                nombre: cliente?.nombre ?? '',
                empresa:cliente?.empresa ?? '',
                email:cliente?.email ?? '',
                telefono:cliente?.telefono ?? '',
                notas:cliente?.notas ?? '',
            }}
            onSubmit= {handleSubmit}
            validationSchema={nuevoClienteSchema}
            enableReinitialize={true}
            >
                {({errors,touched}) => { 
                  
                    return(
            <Form className='bg-white  mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <legend className='text-gray-600 font-bold text-xl text-center'>{cliente.nombre? 'Editar Cliente' : 'Agregar Cliente'}</legend>
        <div>
            <label className='text-gray-500' htmlFor='nombre'>Nombre</label>
            <Field name='nombre' type='text' className='mt-3 p-3 w-full bg-gray-100 border-2 mb-3' id='nombre' placeholder='Nombre del Cliente'></Field>
            {errors.nombre && touched.nombre? <Alerta>{errors.nombre}</Alerta>:null}
            </div>
           
            
       
        <div>
            <label className='text-gray-500' htmlFor='empresa'>Empresa</label>
            <Field name='empresa' type='text' className='mt-3 p-3 w-full bg-gray-100 border-2 mb-3' id='empresa' placeholder='Empresa del Cliente'></Field>
            {errors.empresa && touched.empresa? <Alerta>{errors.empresa}</Alerta>:null}
        </div>
        <div>
            <label className='text-gray-500' htmlFor='email'>E-Mail</label>
            <Field name='email'type='email' className='mt-3 p-3 w-full bg-gray-100 border-2 mb-3' id='email' placeholder='E-Mail del Cliente'></Field>
            {errors.email && touched.email? <Alerta>{errors.email}</Alerta>:null}
        </div>
        <div>
            <label className='text-gray-500' htmlFor='telefono'>Telefono</label>
            <Field name='telefono' type='tel' className='mt-3 p-3 w-full bg-gray-100 border-2 mb-3' id='telefono' placeholder='Telefono del Cliente'></Field>
            {errors.telefono && touched.telefono? <Alerta>{errors.telefono}</Alerta>:null}
        </div>
        <div>
            <label className='text-gray-500' htmlFor='notas'>Notas</label>
            <Field name='notas' as='textarea' type='text' className='mt-3 p-3 w-full bg-gray-100 border-2 mb-3' id='telefono' placeholder='Notas del Cliente'></Field>
        </div>
       <input value={cliente.nombre? 'Editar Cliente' : 'Agregar Cliente'} className='bg-indigo-900 text-white text-center w-full p-5 uppercase font-bold text-lg' type='submit' />

        </Form>
                )}}
        </Formik>
        </>
    )
    
}

Formulario.defaultProps = {
    cliente:{}
}
export default Formulario