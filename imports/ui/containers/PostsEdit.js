import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import Posts from '../../api/posts/posts';
import PostsEdit from '../pages/PostsEdit';

export default PostsEditContainer = createContainer(({params: {_id}}) => {
    const handle = Meteor.subscribe('post.view', _id);
    const loading = !handle.ready();
    const doc = Posts.findOne();
    return {
        loading,
        doc,
    };
}, PostsEdit);