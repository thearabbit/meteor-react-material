import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../stylesheets/theme.js';
import {
    AutoForm,
    AutoField,
    SubmitField,
    Dialog,
} from 'uniforms-material';

import {browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';
import Alert from 'react-s-alert';


import PageBase from '../components/PageBase';

// Schema
import LoginSchema from '../../api/users/login.js';

export default class Login extends Component {

    handleSubmit = (doc) => {
        const email = doc.email;
        const password = doc.password;

        Meteor.loginWithPassword(email, password, (error) => {
            if (error) {
                Alert.error(error.reason);
            } else {
                const {location} = this.props;
                if (location.state && location.state.nextPathname) {
                    browserHistory.push(location.state.nextPathname);
                } else {
                    browserHistory.push('/');
                }
            }
        });
    };

    render() {
        const styles = {
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '20%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            paper: {
                padding: 20,
                overflow: 'auto'
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            loginBtn: {
                float: 'right'
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <div style={styles.loginContainer}>

                        <Paper style={styles.paper}>

                            <AutoForm
                                schema={LoginSchema}
                                showInlineError={true}
                                onSubmit={this.handleSubmit}
                            >
                                <AutoField name="email"/>
                                <AutoField name="password"/>

                                <SubmitField primary={true} fullWidth={true}/>
                            </AutoForm>

                            <Alert stack={{limit: 3}} position='top-right' effect='flip' timeout={3000}/>

                        </Paper>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

};
