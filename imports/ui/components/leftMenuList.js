import React, {Component, PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';

export default leftMenuList = [
    {
        id: "1",
        text: 'Home',
        link: '/',
        props: {
            leftIcon: <FontIcon className="fa fa-home"/>
        },
    },
    {
        id: "2",
        text: 'Post',
        link: '/posts',
        props: {
            leftIcon: <FontIcon className="fa fa-cart-plus"/>
        },
    },
    {
        id: "3",
        text: 'Children',
        link: '/posts',
        props: {
            primaryTogglesNestedList: true,
            leftIcon: <FontIcon className="fa fa-cart-plus"/>
        },
        children: [
            {id: "4", text: 'Home', link: '/'},
            {id: "5", text: 'Post', link: '/posts'},
        ]
    },
];
