import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, loadUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

const Navbar = withRouter(({ isAuthenticated, logout, user, loadUser, title, history }) => {

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <>
            <li>Welcome {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">Logout</a>
            </li>
            <li>
                {isAuthenticated ? <a href='/' onClick={() => history.push('/')}>Home</a> : null}
            </li>
        </>
    );

    const guestLinks = (
        <>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        </>
    );

    return (
        <div>
            <h1>
                {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
});

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logout, loadUser })(Navbar);
