import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600, cyan500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

import SelectableList from './SelectableList';
import leftMenuList from './leftMenuList';


class AppLeftDrawer extends Component {
    render() {

        let {currentUser, navDrawerOpen, navDrawerDocked, handleChangeRequestNavDrawer} = this.props;

        const styles = {
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: cyan500,
                paddingLeft: 40,
                height: 56,
            },
            menuItem: {
                // color: white,
                fontSize: 14
            },
            avatar: {
                div: {
                    padding: '15px 0 20px 15px',
                    // backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
                    backgroundImage: 'url("../images/material_bg.png")',
                    height: 45
                },
                icon: {
                    float: 'left',
                    display: 'block',
                    marginRight: 15,
                    boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
                },
                span: {
                    paddingTop: 12,
                    display: 'block',
                    color: 'white',
                    fontWeight: 300,
                    textShadow: '1px 1px #444'
                }
            }
        };

        const userName = currentUser && currentUser.profile ? `${currentUser.profile.name.last} ${currentUser.profile.name.first}` : '';

        const mapListItem = (nodes) => {
            if (nodes) {
                return nodes.map(node => (
                    <ListItem
                        key={node.id}
                        value={node.id}
                        primaryText={node.text}
                        containerElement={<Link to={node.link}/>}
                        onTouchTap={handleChangeRequestNavDrawer}
                        style={styles.menuItem}
                        nestedItems={mapListItem(node.children)}
                        {...node.props}
                    />
                ));
            }
        };

        return (
            <Drawer
                docked={navDrawerDocked}
                open={navDrawerOpen}
                onRequestChange={handleChangeRequestNavDrawer}
            >
                <div style={styles.logo}>
                    Material Admin
                </div>
                <div style={styles.avatar.div}>
                    <Avatar
                        src="/images/rabbit.png"
                        size={50}
                        style={styles.avatar.icon}
                        color={cyan500}
                    />

                    <span style={styles.avatar.span}>{userName}</span>
                </div>
                <div>

                    <SelectableList defaultValue={1}>
                        {mapListItem(leftMenuList)}
                    </SelectableList>

                </div>
            </Drawer>
        );
    }
}


AppLeftDrawer.propTypes = {
    currentUser: PropTypes.object,
    navDrawerDocked: PropTypes.bool,
    navDrawerOpen: PropTypes.bool,
    handleChangeRequestNavDrawer: PropTypes.func
};

export default  AppLeftDrawer;
