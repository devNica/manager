import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { addLead } from '../../actions/leads'
import PropTypes from 'prop-types'
class Form extends Component {

    static propTypes = {
        addLead: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        email: '',
        message: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addLead(this.state)
    }

    render() {

        const { name, email, message } = this.state

        return (
            <Fragment>
                <div className="card mt-5">
                    <div className="card-header">
                        Add Lead Form
                </div>
                    <div className="card-body">
                        <div className="col-md-6 offset-3">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="id_name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="id_name"
                                        className='form-control'
                                        placeholder='Insert your name'
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="id_email"
                                        className='form-control'
                                        placeholder='Insert the destination email'
                                        value={email}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_email">Message</label>
                                    <textarea
                                        name="message"
                                        id="id_message"
                                        cols="30"
                                        rows="4"
                                        className='form-control'
                                        placeholder='insert the subject of the mail'
                                        value={message}
                                        onChange={this.handleChange}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info" type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Fragment>

        );
    }
}

export default connect(null, { addLead })(Form);