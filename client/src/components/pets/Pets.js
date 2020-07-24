import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPets } from '../../actions/petActions';
import Spinner from '../layouts/Spinner';
import PetItem from './PetItem';

const Pets = ({ pets, loading, getPets, isAuthenticated }) => {

    useEffect(() => {
        getPets();
        //eslint-disable-next-line
    }, []);

    if(pets !== null && pets.length === 0 && !loading) {
        return <h4>Please Add a Pet</h4>
    }
    
    const tableHeader = [{ name: 'Pet Name'}, {name: 'Pet Type'}, {name: 'Action'}];

    if(!isAuthenticated){
        return <Spinner />
    } else {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {tableHeader.map((tab, index) => (
                                <th scope="col" key={`${tab}${index}`}>{tab.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && pets !== null ? pets.map(pet => (<PetItem pet={pet} key={pet._id} />)) : (
                            <Spinner />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pets: state.pet.pets,
    loading: state.pet.loading,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPets })(Pets);
