import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { register } from '../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createMessage } from '../actions/messages'

class Register extends Component {

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuth: PropTypes.bool,

    }

    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, email, password, password2 } = this.state;

        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' })
        } else {
            const newUser = { username, email, password }
            this.props.register(newUser)
        }

    }

    render() {

        if (this.props.isAuth) {
            return <Redirect to='/' />
        }

        const { username, email, password, password2 } = this.state

        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Register Form
                </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="id_username">Username</label>
                                        <input
                                            type="text"
                                            name='username'
                                            id='id_username'
                                            className='form-control'
                                            onChange={this.handleChange}
                                            placeholder='Insert your username'
                                            value={username}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="id_email">Email</label>
                                        <input
                                            type="email"
                                            name='email'
                                            id='id_email'
                                            className='form-control'
                                            onChange={this.handleChange}
                                            placeholder='Insert your email'
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="id_password">Password</label>
                                        <input
                                            type="password"
                                            name='password'
                                            id='id_password'
                                            className='form-control'
                                            onChange={this.handleChange}
                                            placeholder='Insert your password'
                                            value={password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="id_password2">Confirm Password</label>
                                        <input
                                            type="password"
                                            name='password2'
                                            id='id_password2'
                                            className='form-control'
                                            onChange={this.handleChange}
                                            placeholder='Confirm your password'
                                            value={password2}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type='submit'
                                            className='btn btn-success'>Register</button>
                                    </div>
                                    <p>
                                        Already have an account?
                                <Link to='/login'>Login</Link>
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { register, createMessage })(Register);