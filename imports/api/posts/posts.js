import {Mongo} from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema';
import {Tracker} from 'meteor/tracker';

const Posts = new Mongo.Collection('posts');

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

Posts.schema = new SimpleSchema({
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
    //
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

// Posts.attachSchema(Posts.schema);

export default Posts;
