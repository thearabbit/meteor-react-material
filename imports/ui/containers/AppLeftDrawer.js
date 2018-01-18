import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import AppLeftDrawer from '../components/AppLeftDrawer.js';

export default AppLeftDrawerContainer = createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, AppLeftDrawer);