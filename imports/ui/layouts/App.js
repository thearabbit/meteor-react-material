import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, MEDIUM, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../stylesheets/theme';
import Alert from 'react-s-alert';
import Breadcrumbs from 'react-router-breadcrumbs';
import classNames from 'classnames/bind'

import AppHeader from '../components/AppHeader';
// import AppLeftDrawer from '../components/AppLeftDrawer';
import AppLeftDrawerContainer from '../containers/AppLeftDrawer';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: this.props.width === LARGE,
            navDrawerDocked: this.props.width === LARGE || this.props.width === MEDIUM
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({navDrawerOpen: nextProps.width === LARGE});
            this.setState({navDrawerDocked: nextProps.width === LARGE || nextProps.width === MEDIUM});
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {

        let {navDrawerOpen, navDrawerDocked} = this.state;
        const paddingAppLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingAppLeftDrawerOpen : 0
            },
            container: {
                margin: '56px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingAppLeftDrawerOpen : 0
            },
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <AppHeader
                        styles={styles.header}
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                    />

                    <AppLeftDrawerContainer
                        navDrawerOpen={navDrawerOpen}
                        navDrawerDocked={navDrawerDocked}
                        handleChangeRequestNavDrawer={this.props.width !== LARGE ? this.handleChangeRequestNavDrawer.bind(this) : () => {
                        }}/>
                    />

                    <div style={styles.container}>
                        <Breadcrumbs
                            routes={this.props.routes}
                            params={this.props.params}
                            resolver={this.props.crumbResolver}
                        />

                        {this.props.children}

                        <Alert stack={{limit: 3}} position='top-right' effect='flip' timeout={3000}/>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    width: PropTypes.number
};

export default withWidth()(App);
