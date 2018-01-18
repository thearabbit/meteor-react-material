import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import PageBase from '../components/PageBase';

export default class NotFound extends Component {
    render() {
        return (
            <PageBase title="Not Found">
                <h3>404 - Not Found <IndexLink to="/" activeClassName="active">Go to home</IndexLink></h3>
            </PageBase>
        );
    }
}
