import React, { useState } from 'react'
import styled from 'styled-components';
import { Boton } from '../button/Boton';
import { Glabel } from '../label/Glabel';
import { Modals } from '../modal/Modals';
import { Space } from 'antd';

export const AddPhoto = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () =>{
        setVisible(true);
    }

    const cancelModal = () =>{
        setVisible(false);
    }

    return (
        <>
            <Boton title='Agregar foto' accion={showModal} success={true} />
            <Modals visible={visible}>
                <Container>
                    <div className="title">
                        <p>Agregar una nueva foto</p>
                    </div>
                    <div className="form">
                        <form>
                            <Glabel 
                                label='Label' 
                                name='label' 
                                placeholder='Ingrese el nombre de la foto' 
                            />
                            <Glabel
                                label='Url foto'
                                name='url'
                                placeholder='https://mi-foto.png'
                            />
                            <div className="contendorBotones">
                                <Space>
                                    <Boton title='Cancelar' accion={cancelModal} />
                                    <Boton type='submit' title='Enviar' success={true} />
                                </Space>
                            </div>
                        </form>
                    </div>
                </Container>
            </Modals>
        </>
    )
}

const Container = styled.div`
    .title p{
        color: black;
        font-size: 20px;
        font-weight: 500;
        font-family: sans-serif;
    }
    .contendorBotones{
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }

    padding: 5px;
`
