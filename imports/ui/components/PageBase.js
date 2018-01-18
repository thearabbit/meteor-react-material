import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import globalStyles from '../stylesheets/styles';

const PageBase = (props) => {


    const {title, navigation} = props;

    return (
        <div>
            {/*<span style={globalStyles.navigation}>*/}
            {/*{navigation*/}
            {/*.map((nav, key) => <Link key={key} to={nav.link}>{nav.text}</Link>)*/}
            {/*.reduce((prev, curr) => [prev, ' / ', curr])*/}
            {/*}*/}
            {/*</span>*/}

            <Paper style={globalStyles.paper}>
                <h2 style={globalStyles.title}>{title}</h2>

                {props.children}

                <div style={globalStyles.clear}/>

            </Paper>
        </div>
    );
};

PageBase.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.array,
    children: PropTypes.element
};

export default PageBase;
