import React from 'react';
import ViewButton from '../layouts/ViewButton';
import EditButton from '../layouts/EditButton';

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
                {/* <button type="button">View</button>{' '}<span><button type="button">Edit</button></span> */}
                <ViewButton />{' '}<EditButton />
            </td>
        </tr>
    )
}

export default PetItem
