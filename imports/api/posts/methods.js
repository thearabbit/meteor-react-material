import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';
import SimpleSchema from 'simpl-schema';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';

import rateLimit from '../../modules/rateLimit';

import Posts from './posts';

// Upsert
export const upsertPost = new ValidatedMethod({
    name: 'posts.upsert',
    mixins: [CallPromiseMixin],
    // validate: Post.schema.validator(),
    validate: null,
    run(doc) {
        if (!this.userId) {
            // Throw errors with a specific error code
            throw new Meteor.Error('App.postList.notLoggedIn',
                'Must be logged in to make private lists.');
        }

        return Posts.upsert({_id: doc._id}, {$set: doc});
    }
});

export const removePost = new ValidatedMethod({
    name: 'posts.remove',
    mixins: [CallPromiseMixin],
    // validate: null,
    validate: new SimpleSchema({
        _id: {type: String},
    }).validator(),
    run(selector) {
        if (!this.userId) {
            // Throw errors with a specific error code
            throw new Meteor.Error('App.postList.notLoggedIn',
                'Must be logged in to make private lists.');
        }

        console.log(selector);

        return Posts.remove(selector);

    }
});

rateLimit({
    methods: [
        upsertPost,
        removePost,
    ],
    limit: 5,
    timeRange: 1000,
});
