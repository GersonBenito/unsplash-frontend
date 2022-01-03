import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { buscarPhotos } from '../../redux/acciones/photo';
import { Glabel } from '../label/Glabel'

export const Search = () => {

    const [form, handleInputChange] = useForm({
        label: ''
    });

    const { label } = form;

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch( buscarPhotos(label) );

    },[label, dispatch])

    return (
        <Glabel
            placeholder='Buscar foto...'
            event={handleInputChange}
            name='label'
        />
    )
}
