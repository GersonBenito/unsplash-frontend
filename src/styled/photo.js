import styled from 'styled-components';

export const Imagen = styled.div`
    img{
        width: 350px;
        border-radius: 10px;
        cursor: pointer;
    }

    .delete{
        display: none;
    }

    .title{
        display: none;
    }

    
    &:hover{
        color: white;
        font-family: sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        position: relative;
    
        .delete{
            display: block;
            position: absolute;
            top: 0rem;
            right: 0rem;
            padding: 10px;
            background-color: rgb(41 41 41 / 60%);
        }
        .title{
            display: block;
            position: absolute;
            bottom: 0rem;
            padding: 10px;
            background-color: rgb(41 41 41 / 60%);
            p{
                margin-bottom: 0px;
            }
        }  
    }
`;