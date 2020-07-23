import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/authActions';

const Login = (props) => {
    const { loginUser, clearErrors, isAuthenticated, error } = props;

    useEffect(() => {
        if(isAuthenticated === true) {
            props.history.push('/');
        }

        if(error === 'Invalid credentials') {
            console.log('Error');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = event => setUser({ ...user, [event.target.name]: event.target.value });

    const onSubmit = event => {
        event.preventDefault();
        if(email === '' || password === '') {
            console.log('Please fill in all fields');
        } else {
            loginUser({
                email, password
            });
            // props.history.push('/');
        }
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, { loginUser, clearErrors })(Login);