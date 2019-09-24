import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import { connect } from 'react-redux'

class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getLeads();
    }



    render() {


        return (
            <Fragment>
                <div className='mt-4'>
                    <h2 className='text-center'>Leads</h2>
                    <table className='table table-striped bg-white'>
                        <thead>
                            <tr>
                                <th className='text-center'>ID</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.leads.map(lead => (
                                <tr key={lead.id}>
                                    <td className='text-center'>
                                        {lead.id}
                                    </td>
                                    <td className='text-center'>
                                        {lead.name}
                                    </td>
                                    <td className='text-center'>
                                        {lead.email}
                                    </td>
                                    <td className='text-center'>
                                        {lead.message}
                                    </td>
                                    <td >
                                        <button
                                            className='btn btn-danger btn-sm'
                                            onClick={this.props.deleteLead.bind(this, lead.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </Fragment >
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);