import { Modal } from 'antd';
import { ContainerModal } from '../../styled/gmodal';

export const Gmodal = ({ visible, children }) => {
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


