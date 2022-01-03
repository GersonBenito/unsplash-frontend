import { Button } from 'antd';
import { Container } from '../../styled/button';

export const Boton = ({ 
    title, 
    accion, 
    type = 'button', 
    success = false, 
    danger = false, 
    round = false,
    transparent = false, 
    border = true,
}) => {
    return (
        <Container 
            success={success} 
            danger={danger} 
            round={round}
            transparent={transparent}
            border={border}
        >
            <Button htmlType={type} onClick={accion}>{title}</Button>
        </Container>
    )
}
