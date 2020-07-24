import React from 'react';
import './AddButton.css';

const AddButton = ({ openModal }) => {
    return (
        <>
            <a className="float" onClick={openModal}>
                <i className="fa fa-plus my-float"></i>
            </a>
        </>
    )
}

export default AddButton;
