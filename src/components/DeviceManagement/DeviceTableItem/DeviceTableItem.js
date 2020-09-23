import * as React from "react";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import UnpairDeviceModal from "../UnpairDeviceModal/UnpairDeviceModal";


class DeviceTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unpairDeviceModalShow: false,
        }
    }

    // Triggers the opening/closing of the unpairDeviceModal
    setUnpairDeviceModalShow = (bool) => {
        this.setState({
            unpairDeviceModalShow: bool,
        });
    };


    render() {
        const {id, deviceStatus, associatedUserID, associatedUserName} = this.props;
        const {unpairDeviceModalShow} = this.state;
        return(
            <tr>
                <th scope="row">
                    {id}
                </th>
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
                                onClick={() => this.setUnpairDeviceModalShow(true)}
                            >
                                Unpair Device
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UnpairDeviceModal show={unpairDeviceModalShow} deviceID={id} userName={associatedUserName} userID={associatedUserID} onHide={() => this.setUnpairDeviceModalShow(false)} />
                </td>
            </tr>
        )
    }

}

export default DeviceTableItem;