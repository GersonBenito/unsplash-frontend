import { Modal } from 'antd';
import styled from 'styled-components';
export const Modals = ({ visible, children }) => {
    return (
        <ContainerModal>
            <Modal
                visible={ visible }
                footer={ false }
                closable={ false }
            >
                { children }
            </Modal>
        </ContainerModal>
    )
}

const ContainerModal = styled.div`

`

