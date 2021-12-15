import styled from 'styled-components'

export const Photo = ({ url, title }) => {
    return (
        <Imagen>
            <img src={url} alt={title} />
        </Imagen>
    )
}

const Imagen = styled.div`
    img{
        width: 350px;
        border-radius: 10px;
        cursor: pointer;
    }

`;
