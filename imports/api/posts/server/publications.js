import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Post from '../posts.js';
// import Comments from '../comments.js';

Meteor.publish('post.list', () => {
    // Meteor._sleepForMs(100);
    const docs = Post.find({});
    return docs;
});

Meteor.publish('post.view', (_id) => {
    check(_id, String);

    return Post.find({_id: _id});
});

// Meteor.publish('comments.list', () => {
//     // Meteor._sleepForMs(100);
//     const docs = Comments.find({});
//     return docs;
// });

// Meteor.publish('comments.view', (_id) => {
//     check(_id, String);
//
//     return Comments.find({_id: _id});
// });
