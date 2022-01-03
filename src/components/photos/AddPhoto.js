import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Boton } from '../button/Boton';
import { Glabel } from '../label/Glabel';
import { Gmodal } from '../modal/Gmodal';
import { Space } from 'antd';
import { useForm } from '../../hooks/useForm';
import { agregarPhoto } from '../../redux/acciones/photo';
import { Container } from '../../styled/addPhoto';

export const AddPhoto = () => {

    const [visible, setVisible] = useState(false);
    const [form, handleInputChange] = useForm({
        label: '',
        url: '',
    });

    const dispatch = useDispatch();

    const { label, url } = form;

    const showModal = () =>{
        setVisible(true);
    }

    const cancelModal = () =>{
        setVisible(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch( agregarPhoto(form) );
        cancelModal();
    }

    return (
        <>
            <Boton title='Agregar foto' accion={showModal} success={true} border={false} />
            <Gmodal visible={visible}>
                <Container>
                    <div className="title">
                        <p>Agregar una nueva foto</p>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="label">
                                <Glabel 
                                    label='Label' 
                                    name='label' 
                                    event={handleInputChange}
                                    value={label}
                                    placeholder='Ingrese el nombre de la foto' 
                                />
                            </div>
                            <div className="url">
                                <Glabel
                                    label='Url foto'
                                    name='url'
                                    event={handleInputChange}
                                    value={url}
                                    placeholder='https://mi-foto.png'
                                />
                            </div>
                            <div className="contendorBotones">
                                <Space>
                                    <Boton title='Cancelar' accion={cancelModal} border={false} />
                                    <Boton type='submit' title='Enviar' success={true} border={false} />
                                </Space>
                            </div>
                        </form>
                    </div>
                </Container>
            </Gmodal>
        </>
    )
}

