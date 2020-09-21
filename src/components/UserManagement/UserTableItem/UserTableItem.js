import * as React from "react";
import {  withRouter } from 'react-router-dom';
import DeleteUserModal from "../../../components/UserProfile/DeleteUserModal/DeleteUserModal";


import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Media,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap";



class UserManagementTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteModalShow: false,
        }
    }

    // Triggers the opening/closing of the DeleteUserModal
    setDeleteModalShow = (bool) => {
        this.setState({
            deleteModalShow: bool,
        });
    };

    profileRouter = () => {
        const {id, history} =  this.props;
        let path = "/admin/user-profile/".concat(id);
        history.push(path);
    }

    render() {
        const {name, profileImg, id, room, device } = this.props;
        const {deleteModalShow} = this.state;
        if (Object.keys(device).length === 0) {
            device.id = "NONE"
        }
        return (
            <tr>
                <th scope="row">
                    <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                                {name}
                            </span>
                    </Media>
                </th>
                <td>
                    <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id={"tooltip" + id}
                            onClick={e => e.preventDefault()}
                        >
                            <img
                                alt="..."
                                className="rounded-circle"
                                src={profileImg}
                            />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target={"tooltip" + id}
                        >
                            {name}
                        </UncontrolledTooltip>
                    </div>
                </td>
                <td>{id}</td>
                <td>{room}</td>
                <td>{device.id}</td>
                <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                href=""
                                onClick={this.profileRouter}
                            >
                                View Profile
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Locate User
                            </DropdownItem>
                            <DropdownItem
                                href="#"
                                onClick={() => this.setDeleteModalShow(true)}
                            >
                                Delete User
                            </DropdownItem>
                            <DeleteUserModal show={deleteModalShow} userID={id} userName={name} onHide={() => this.setDeleteModalShow(false)} />
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </td>
            </tr>
        )
    }
}

export default withRouter(UserManagementTableItem);