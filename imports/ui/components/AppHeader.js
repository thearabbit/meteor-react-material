import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';
import {browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';


class AppHeader extends React.Component {
    handleLogout = () => {
        Meteor.logout(() => browserHistory.push('/login'));
    };

    render() {
        const {styles, handleChangeRequestNavDrawer} = this.props;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 56,
                zIndex: 1000
            },
            menuButton: {
                marginLeft: 15
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        return (
            <div>
                <AppBar
                    style={{...styles, ...style.appBar}}
                    title={
                        <SearchBox />
                    }
                    iconElementLeft={
                        <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                            <Menu color={white}/>
                        </IconButton>
                    }
                    iconElementRight={
                        <div style={style.iconsRightContainer}>

                            {/*<IconMenu color={white}*/}
                                      {/*iconButtonElement={*/}
                                          {/*<IconButton><ViewModule color={white}/></IconButton>*/}
                                      {/*}*/}
                                      {/*targetOrigin={{horizontal: 'right', vertical: 'top'}}*/}
                                      {/*anchorOrigin={{horizontal: 'right', vertical: 'top'}}*/}
                            {/*>*/}
                                {/*<MenuItem key={1} primaryText="Application 1"/>*/}
                                {/*<MenuItem key={2} primaryText="Application 2"/>*/}
                                {/*<MenuItem key={3} primaryText="Application 3"/>*/}
                            {/*</IconMenu>*/}
                            <IconMenu color={white}
                                      iconButtonElement={
                                          <IconButton><MoreVertIcon color={white}/></IconButton>
                                      }
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Sign out" onTouchTap={this.handleLogout}/>
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

AppHeader.propTypes = {
    styles: PropTypes.object,
    handleChangeRequestNavDrawer: PropTypes.func
};

export default AppHeader;
