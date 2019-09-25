import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

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

export default Login;