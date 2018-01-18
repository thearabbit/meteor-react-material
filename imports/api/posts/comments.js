import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {Tracker} from 'meteor/tracker';

const Comments = new Mongo.Collection('comments');

const PersonSchema = new SimpleSchema({
    name: {
        type: String,
        min: 3,
        max: 50
    },

    age: {
        type: Number,
        min: 0,
        max: 150
    }
});

Comments.schema = new SimpleSchema({
    category: {
        type: String,
        allowedValues: [
            "news",
            "image",
            "video"
        ]
    },

    // categories: {
    //     type: [String],
    //     allowedValues: [
    //         "news",
    //         "image",
    //         "video"
    //     ]
    // },

    // authors: {
    //     type: [PersonSchema],
    //     minCount: 1,
    //     maxCount: 3
    // },

    publishedDate: {
        type: Date,
    },

    published: {
        type: Boolean,
        optional: true
    }
});

Comments.attachSchema(Comments.schema);

export default Comments;
