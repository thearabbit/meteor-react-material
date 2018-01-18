import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema';

import rateLimit from './rateLimit';
import Posts from '../api/posts/posts';

export const dynamicRemove = new ValidatedMethod({
    name: 'dynamicRemove',
    mixins: [CallPromiseMixin],
    validate: null,
    // validate: new SimpleSchema({
    //     _id: {type: String, optional: true},
    // }).validator(),
    run({collectionPath, selector}) {
        // if (!this.isSimulation) {
        if (!this.userId) {
            // Throw errors with a specific error code
            throw new Meteor.Error('DynamicRemove.notLoggedIn',
                'Must be logged in to remove doc.');
        }

        import(collectionPath).then(({default: Collection}) => {
            Meteor._sleepForMs(1000);
            Collection.remove(selector);
        });

        // const {default: Collection} = await import(collectionPath);
        // Collection.remove(selector, (error) => {
        //     console.log(error);
        // });

        // return true;
        // }
    }
});

// rateLimit({
//     methods: [
//         dynamicRemove,
//     ],
//     limit: 5,
//     timeRange: 1000,
// });
