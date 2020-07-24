import React from 'react';
import ViewButton from '../layouts/ViewButton';
import EditButton from '../layouts/EditButton';
import { Link } from 'react-router-dom';

const PetItem = ({ pet }) => {

    return (
        <tr>
            <td>
                {pet.petName}
            </td>
            <td>
                {pet.petType}
            </td>
            <td>
                {/* <button type="button" onClick={() => history.push(`/pets/${pet._id}`)}>View</button>{' '}<span><button type="button">Edit</button></span> */}
                <ViewButton pet={pet} />{' '}<EditButton />
            </td>
        </tr>
    )
}

export default PetItem
