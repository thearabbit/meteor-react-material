import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from '../../ui/layouts/App';
import NotFound from '../../ui/pages/NotFound';
import Login from '../../ui/pages/Login';
import Index from '../../ui/pages/Index';
import Posts from '../../ui/pages/Posts';
import PostsNew from '../../ui/pages/PostsNew';
import PostsEditContainer from '../../ui/containers/PostsEdit';


// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const authenticate = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname},
        });
    }
};

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="login" component={Login}/>
            <Route name="App" path="/" component={App} onEnter={authenticate}>
                <IndexRoute name="Index" component={Index}/>
                <Route name="Post" path="posts" component={Posts}>
                    <Route name="New" path="new" component={PostsNew}/>
                    <Route name="Edit" path=":_id/edit" component={PostsEditContainer}/>
                </Route>
            </Route>
            <Route name="404: Not Found" path="*" component={NotFound}/>
        </Router>,
        document.getElementById('render-target'));
});