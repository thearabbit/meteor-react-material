import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {AutoForm, AutoField, DateField, SelectField, SubmitField} from 'uniforms-material';
import Alert from 'react-s-alert';
import moment from 'moment';

import PageBase from '../components/PageBase';
import Posts from '../../api/posts/posts';
import {upsertPost} from '../../api/posts/methods';

import Loading from '../components/Loading';

export default class PostsEdit extends Component {
    handleSubmit = (doc) => {
        upsertPost.callPromise(doc).then((result) => {
            Alert.success('Success!');
            browserHistory.push('/posts');
        }).catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            <PageBase title="Post">

                {
                    this.propsloading ?
                        <Loading/>
                        :
                        Testing
                }
            </PageBase>
        );
    }
}

PostsEdit.propTypes = {
    loading: PropTypes.bool,
    doc: PropTypes.object
};
