import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Alert from 'react-s-alert';

import PageBase from '../components/PageBase';
import {postList} from '../../api/posts/methods.js';
import PostsList from '../containers/PostsList.js';

export default Post = ({children}) => (
    <PageBase title="Post">
        {
            children ?
                children
                :
                <div>
                    <RaisedButton
                        label="New"
                        primary={true}
                        icon={<ContentAdd />}
                        containerElement={<Link to="/posts/new"/>}
                    />

                    <PostsList/>
                </div>
        }
    </PageBase>
);

Post.propTypes = {
    children: PropTypes.node
};
