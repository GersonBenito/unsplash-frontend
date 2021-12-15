import styled from 'styled-components'
import { Input } from 'antd';
export const Glabel = ({label, name, placeholder, event }) => {
    return (
        <Label>
            <label htmlFor={name}>{label}</label>
            <Input id={name} name={name} onChange={event} placeholder={placeholder} />
        </Label>
    )
}

const Label = styled.div`
    .ant-input{
        border: 1px solid black;
        border-radius: 5px;
    }
`;
