import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmDel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        };
    }

    handleClose = () => {
        this.setState({open: false});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open});
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                onTouchTap={this.props.handleRemove}
            />,
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                Are you sure to delete this [{this.props.primaryText}]?
            </Dialog>
        );
    }
};

ConfirmDel.propTypes = {
    open: PropTypes.bool,
    primaryText: PropTypes.string,
    handleRemove: PropTypes.func
};
