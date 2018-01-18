import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';

const styles = {
    navigation: {
        fontSize: 15,
        fontWeight: typography.fontWeightLight,
        color: grey600,
        paddingBottom: 15,
        display: 'block',
        // a: {
        //     link: {
        //         color: "red"
        //     }
        // },
        // "a:visited": {
        //     color: "green"
        // },
        // "a:hover": {
        //     color: "hotpink"
        // },
        // "a:active": {
        //     color: "blue"
        // }
    },
    title: {
        fontWeight: typography.fontWeightLight,
        marginTop: 0,
        marginBottom: 10,
        borderBottom: "1px solid #eee",
        paddingBottom: 3,
        lineHeight: 1.334,
    },
    paper: {
        padding: 30
    },
    clear: {
        clear: 'both'
    },
};

export default styles;
