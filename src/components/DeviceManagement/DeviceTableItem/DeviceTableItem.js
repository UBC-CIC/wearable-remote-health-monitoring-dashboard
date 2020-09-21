import * as React from "react";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";


class DeviceTableItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {id, devicePaired, deviceStatus, associatedUserID, associatedUserName} = this.props;
        return(
            <tr>
                <th scope="row">
                    {id}
                </th>
                <td>{(devicePaired)? "Yes" : "No"}</td>
                <td>{deviceStatus}</td>
                <td>{associatedUserName + ": " + associatedUserID}</td>
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
                                Unpair Device
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Delete Device
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </td>
            </tr>
        )
    }

}

export default DeviceTableItem;