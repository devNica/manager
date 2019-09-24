import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

import { Provider } from 'react-redux'
import store from '../store'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Alerts from './layout/Alerts'

// optional cofiguration
const options = {
    position: 'top center',
    timeout: 3000,
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">

                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>

            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));