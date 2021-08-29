import React from 'react';
import Modal,{prototype} from 'react-modal';

const CarModal = (props) => (
    <Modal
        isOpen = {props.isOpen}
        contentLabel = {props.contentLabel}
        onRequestClose = {props.onCloseHandler}
    >
        This is a Modal
    </Modal>
);

export default CarModal;