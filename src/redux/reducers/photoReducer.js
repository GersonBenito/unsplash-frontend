import { types } from "../types/types"

const initialState = {
    photos: [],
    active: null
}

export const photoReducer = (state = initialState, action) =>{
    console.log(action);

    switch(action.type){
        case types.ADD_PHOTO:
            return {
                ...state,
                photos: [action.payload, ...state.photos]
            }
        case types.GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
        default: 
        return state
    }
}