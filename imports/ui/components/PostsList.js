import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Griddle from 'griddle-react';
import moment from 'moment';
import Alert from 'react-s-alert';

import Loading from '../components/Loading';
import ConfirmDel from '../components/ConfirmDel';

import {removePost} from '../../api/posts/methods';

class PostsList extends Component {
    state = {
        openConfirmDel: false,
        selector: {}
    };

    handleOpenConfirmDel = (_id) => {
        this.setState({openConfirmDel: true, selector: {_id: _id}});
    };

    handleEdit = (_id) => {
        browserHistory.push(`/posts/${_id}/edit`);
    };

    handleRemove = () => {
        removePost.callPromise(this.state.selector).then((result) => {
            Alert.success('Success!');
            this.setState({openConfirmDel: false});
        }).catch((error) => {
            console.log('error', error);
        });
    };

    render() {
        const columnMetadata = [
            {
                columnName: "_id",
                displayName: "ID",
                sortable: true,
                order: 1,
                locked: false,
                visible: true,
            },
            {
                columnName: "category",
                displayName: "Category",
                sortable: true,
                order: 2,
                locked: false,
                visible: true,
            },
        ];

        return (
            <div>
                {this.props.loading ?
                    <Loading/>
                    :
                    <div>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Category</TableHeaderColumn>
                                    <TableHeaderColumn>Published Date</TableHeaderColumn>
                                    <TableHeaderColumn>Action</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>

                            <TableBody displayRowCheckbox={false}>
                                {this.props.docs.map(post => (
                                    <TableRow key={post._id}>
                                        <TableRowColumn>{post._id}</TableRowColumn>
                                        <TableRowColumn>{post.category}</TableRowColumn>
                                        <TableRowColumn>{moment(post.publishedDate).format("DD/MM/YYYY")}</TableRowColumn>
                                        <TableRowColumn>
                                            <IconMenu
                                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                            >
                                                <MenuItem
                                                    primaryText="Edit"
                                                    onTouchTap={(event) => this.handleEdit(post._id)}
                                                />
                                                <MenuItem
                                                    primaryText="Delete"
                                                    onTouchTap={(event) => this.handleOpenConfirmDel(post._id)}
                                                />
                                            </IconMenu>
                                        </TableRowColumn>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>

                        {/*<Griddle*/}
                            {/*results={this.props.docs}*/}
                            {/*showFilter={true}*/}
                            {/*showSettings={true}*/}
                            {/*columnMetadata={columnMetadata}*/}
                            {/*columns={["category"]}*/}

                            {/*sortAscendingComponent={<span className="fa fa-sort-alpha-asc"></span>}*/}
                            {/*sortDescendingComponent={<span className="fa fa-sort-alpha-desc"></span>}*/}
                        {/*/>*/}


                        {/* Confirm to delete*/}
                        <ConfirmDel
                            open={this.state.openConfirmDel}
                            primaryText={this.state.selector._id}
                            handleRemove={this.handleRemove}
                        />
                    </div>
                }
            </div>
        );
    }
}


PostsList.propTypes = {
    loading: React.PropTypes.bool,
    docs: React.PropTypes.array,
};

export default  PostsList;
