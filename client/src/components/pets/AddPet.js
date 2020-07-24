import React, { useState } from 'react';
import Modal from 'react-modal';
import AddButton from '../layouts/AddButton/AddButton';
import { connect } from 'react-redux';
import { addPet } from '../../actions/petActions';

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

const AddPet = ({ addPet }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [description, setDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    //clear form fields
    const clearFields = () => {
        setPetName('');
        setPetType('');
        setDescription('');
        setSkillOne('');
        setSkillTwo('');
        setSkillThree('');
    }

    const onSubmit = e => {
        e.preventDefault();
        if(petName === '' || petType === '' || description === '') {
            console.error('Error');
        } else {
            const newPet = {
                petName,
                petType,
                description,
                skillOne,
                skillTwo,
                skillThree
            };
            addPet(newPet);
            clearFields();
            closeModal();
        }
    }

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
                <form onSubmit={onSubmit}>
                    <h4>Add a Pet</h4>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="petName"
                                value={petName}
                                onChange={e => setPetName(e.target.value)}
                                style={{outline: 0, borderWidth: '0 0 2px', borderColor: 'red'}}
                            />
                            <label htmlFor="petName">Pet Name</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="petType"
                                value={petType}
                                onChange={e => setPetType(e.target.value)}
                            />
                            <label htmlFor="petType">Pet Type</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <label htmlFor="description">Pet Description</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="skillOne"
                                value={skillOne}
                                onChange={e => setSkillOne(e.target.value)}
                            />
                            <label htmlFor="skillOne">Skill One</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="skillTwo"
                                value={skillTwo}
                                onChange={e => setSkillTwo(e.target.value)}
                            />
                            <label htmlFor="skillTwo">Skill Two</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input 
                                type="text"
                                name="skillThree"
                                value={skillThree}
                                onChange={e => setSkillThree(e.target.value)}
                            />
                            <label htmlFor="skillThree">Skill Three</label>
                        </div>
                    </div>
                    <input type="submit" value="+" />
                </form>
            </Modal>
            <AddButton openModal={openModal} />
        </div>
    );
}

export default connect(null, { addPet } )(AddPet);