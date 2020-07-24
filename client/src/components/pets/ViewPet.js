import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPet } from '../../actions/petActions';

const ViewPet = ({ getPet, pets }) => {
    useEffect(() => {
        getPet();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h5>{pets.petName}</h5>
            <h5>{pets.petType}</h5>
            <h5>{pets.description}</h5>
            <h3>Skills:</h3>
            <h5>{pets.skillOne}</h5>
            <h5>{pets.skillTwo}</h5>
            <h5>{pets.skillThree}</h5>
        </div>
    )
}

const mapStateToProps = state => ({
    pets: state.pet.pets
});

export default connect(mapStateToProps, { getPet })(ViewPet);
