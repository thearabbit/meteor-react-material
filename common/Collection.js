import {SimpleSchema} from 'meteor/aldeed:simple-schema';

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

const PostSchema = new SimpleSchema({
    category: {
        type: String,
        allowedValues: [
            "news",
            "image",
            "video"
        ]
    },

    authors: {
        type: [PersonSchema],
        minCount: 1,
        maxCount: 3
    },

    publishedDate: {
        type: Date
    },

    published: {
        type: Boolean,
        optional: true
    }
});

export default PostSchema;