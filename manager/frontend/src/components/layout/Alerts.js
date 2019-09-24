import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name && error.msg.email) {
                alert.error('name and email fields are required')
            }
            if (error.msg.name) {
                alert.error('the name field is required')
            }
            if (error.msg.email) {
                alert.error(error.msg.email)
            }


        }
        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.info(message.addLead)
            }
        }
    }

    render() {
        return (
            <Fragment />
        );
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages,
})

export default connect(mapStateToProps)(withAlert()(Alerts));