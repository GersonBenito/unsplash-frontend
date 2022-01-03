import styled from 'styled-components';

export const Container = styled.div`
    .ant-btn{
        border: ${props => props.danger ? '2px solid #dc3545':props.border ? '1px solid black' : 'none'};
        color: ${props => props.success ? 'white': props.danger ? '#dc3545' : '#6c757d' };
        border-radius: ${props => props.round ? '50px' : '8px'};
        font-weight: ${props => props.danger ? '600' : '500'};
        letter-spacing: 1px;
        background-color: ${props => props.success ? '#28a745' : props.transparent ? 'transparent' : 'none'} ;
        opacity: ${props => props.danger ? 'none' : '.8'};
    }
`