import { usedFetch } from "../../hooks/useFetch";
import { types } from "../types/types"

export const agregarPhoto = (photo) => async (dispatch) =>{

    await usedFetch('photo', photo, 'POST');
    dispatch( getPhotos() );

}

export const getPhotos = () => async (dispatch) =>{ //hacer el dispatch, gracias a thunk, el segundo parametros el getState
    
    const { data } = await usedFetch('photo');
   
    dispatch( obtenerPhotos(data) );

}

export const buscarPhotos = (label) => async (dispatch) =>{
    const { data } = await usedFetch(`search?label=${label}`);
    dispatch( obtenerPhotos(data) );
}


const obtenerPhotos = (data) =>({
    type: types.GET_PHOTOS,
    payload: data
})

