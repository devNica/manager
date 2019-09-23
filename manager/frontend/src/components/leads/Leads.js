import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <h1>Desde Leads</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, null)(Leads);