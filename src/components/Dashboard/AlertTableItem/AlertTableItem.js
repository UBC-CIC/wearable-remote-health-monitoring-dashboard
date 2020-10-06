import * as React from "react";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {connect} from "react-redux";
import {deleteAlertRequest} from "../../../actions/alertActions.js"
import moment from "moment";


class AlertTableItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        let associatedUser = this.findUser();
        this.setState({
            user: associatedUser,
        })
    }

    findUser = () => {
        const {users, alert} = this.props;
        return users.find(user => user.device.id === alert.deviceID);
    }

    // Delete Alert
    onResolve = (e) => {
        e.preventDefault();
        const {deleteAlertRequest, alert} = this.props;
        deleteAlertRequest({id: alert.id});
    }

    render() {
     const {alert} = this.props;
     const {user} = this.state;
     const time = alert.createdAt;
        return(
            <tr>
                <th scope="row">
                    {user.firstName + " " + user.lastName}
                </th>
                <td>
                    {moment(time*1000).format("ddd, MMM D YYYY, h:mm:ss a")}
                </td>
                <td>{alert.type}</td>
                <td>{alert.description}</td>
                <td>{(alert.location)? "N/A" : "Unknown"}</td>
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
                                onClick={this.onResolve}
                            >
                                Mark As Resolved
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, {deleteAlertRequest})(AlertTableItem);