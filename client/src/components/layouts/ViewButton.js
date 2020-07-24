import React from 'react';
import { withRouter } from 'react-router-dom';

const ViewButton = withRouter(({ history, pet }) => (
    <button type="button" onClick={() => history.push(`/pets/${pet._id}`)}>View</button>
))

export default ViewButton;
