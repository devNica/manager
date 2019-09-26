import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }



    render() {

        const { isAuth, user } = this.props.auth;

        const authLinks = isAuth ?
            <Fragment>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.props.logout} href='#'>Logout</a>
                </li>
            </Fragment> :
            <Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </Fragment>

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">React Django - LeadManager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            {authLinks}


                        </ul>
                    </div>
                </div>
            </nav>
        );
    };

}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Header);