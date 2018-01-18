import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {AutoForm, AutoField, DateField, SelectField, SubmitField} from 'uniforms-material';
import Alert from 'react-s-alert';
import moment from 'moment';

import PageBase from '../components/PageBase';
import Posts from '../../api/posts/posts';
import {upsertPost} from '../../api/posts/methods';

export default class PostNew extends Component {
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

                {/*<AutoForm*/}
                    {/*schema={Posts.schema}*/}
                    {/*showInlineError={true}*/}
                    {/*onSubmit={this.handleSubmit}*/}
                {/*>*/}
                    {/*<AutoField name="category"/>*/}

                    {/*<SelectField*/}
                        {/*name="categories"*/}
                        {/*multiple={true}*/}
                        {/*hintText="Select a name"*/}
                    {/*/>*/}
                    {/*<AutoField name="authors"/>*/}

                    {/*<DateField name="publishedDate"/>*/}
                    {/*<AutoField name="published"/>*/}

                    {/*<SubmitField primary={true}/>*/}
                {/*</AutoForm>*/}

            </PageBase>
        );
    }
}
