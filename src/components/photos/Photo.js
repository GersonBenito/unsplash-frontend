import { Imagen } from '../../styled/photo'
import { Boton } from '../button/Boton'

export const Photo = ({ url, label }) => {
    
    return (
        <Imagen>
            <img src={url} alt={label} />
            <div className="delete">
                <Boton title='Delete' danger={true} round={true} transparent={true} />
            </div>
            <div className="title">
                <p>{label}</p>
            </div>
        </Imagen>
    )
}

