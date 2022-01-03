import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Photo } from './Photo'
import { getPhotos } from '../../redux/acciones/photo';
import { useSelector } from 'react-redux';
import { ContainerPhoto } from '../../styled/photos';

export const Photos = () =>{

    const dispatch = useDispatch();
    
    const { photos } = useSelector( state => state.photos );
   
    useEffect(()=>{
        dispatch( getPhotos() );
    },[dispatch])

    
    return (
        <ContainerPhoto>
            {
                photos.length > 0 && photos.map(foto => <Photo key={foto._id} {...foto} />)

            }
        </ContainerPhoto>
    )
}

