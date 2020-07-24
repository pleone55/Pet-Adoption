import React, { useState } from 'react';
import Modal from 'react-modal';
import AddButton from '../layouts/AddButton/AddButton';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const Modal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Add a Pet"
            >
                <button type="button" onClick={closeModal}>Close</button>
                <div>Modal</div>
                <form>
                    <input />
                    <button>tab</button>
                    <buton>Nav</buton>
                    <button>is</button>
                </form>
            </Modal>
            <AddButton onClick={openModal} />
        </div>
    );
}

export default Modal;
