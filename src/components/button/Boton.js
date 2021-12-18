import styled from 'styled-components';
import { Button } from 'antd';

export const Boton = ({ title, accion, type = 'button', success = false }) => {
    return (
        <Contenedor success={success}>
            <Button htmlType={type} onClick={accion}>{title}</Button>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    .ant-btn{
        border: none;
        color: ${props => props.success ? 'white':'#6c757d'};
        border-radius: 8px;
        font-weight: 500;
        letter-spacing: 1px;
        background-color: ${props => props.success ? '#28a745' : 'transparent' } ;
        opacity: .8;
    }
`
