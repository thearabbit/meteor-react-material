import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import Posts from '../../api/posts/posts';
import PostsList from '../components/PostsList';

export default PostsListContainer = createContainer(() => {
    const handle = Meteor.subscribe('post.list');
    const loading = !handle.ready();
    const docs = Posts.find().fetch();
    return {
        loading,
        docs,
    };
}, PostsList);