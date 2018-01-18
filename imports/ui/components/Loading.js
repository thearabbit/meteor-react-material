import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {blue600} from 'material-ui/styles/colors';

const styles = {
    textAlign: 'center'
};

const Loading = () => (
    <div style={styles}>
        <CircularProgress size={60}/>
    </div>
);

export default Loading;