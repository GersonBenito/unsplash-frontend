import { Input } from 'antd';
import { Label } from '../../styled/glabel';

export const Glabel = ({label, name, value, placeholder, event }) => {
    return (
        <Label>
            <label htmlFor={name}>{label}</label>
            <Input id={name} name={name} value={value} onChange={event} placeholder={placeholder} />
        </Label>
    )
}
