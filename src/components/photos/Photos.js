import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usedFetch } from '../../hooks/useFetch'
import { Photo } from './Photo'

export const Photos = () =>{

    const [photo, setPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPhotos = async () =>{
        const { data, loading } = await usedFetch('photo');
        setPhoto(data);
        setIsLoading(loading);
    }

    useEffect(()=>{
        getPhotos();
    },[])

    
    return (
        <ContainerPhoto>
            {
                !isLoading && photo.map(foto => <Photo key={foto._id} {...foto} />)

            }
        </ContainerPhoto>
    )
}

const ContainerPhoto = styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-rows: 12rem;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill,minmax(min(100%,20rem),1fr));
    justify-items: center;
    align-items: center;
    padding: 20px
`;
