import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import PropTypes from 'prop-types'

class Login extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuth: PropTypes.bool
    }

    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state;
        this.props.login(username, password)
    }

    render() {

        if (this.props.isAuth) {
            return <Redirect to='/' />
        }

        const { username, password } = this.state

        return (

            <div className="container">

                <div className="card mt-5">
                    <div className="card-header">
                        Login Form
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
                                        <button
                                            type='submit'
                                            className='btn btn-success'>Login</button>
                                    </div>
                                    <p>
                                        Don't have an account?
                            <Link to='/register'>Register</Link>
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

export default connect(mapStateToProps, { login })(Login);